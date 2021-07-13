const { default: axios } = require('axios')

// make an HTTP request to the currently selected service
const request = async function (store, method, url, params, data) {
  const req = {
    method: method,
    baseURL: store.state.session.currentService.host,
    validateStatus: function () {
      return true // always resolve the promise
    },
    url: url,
    params: params,
    data: data,
    withCredentials: true
  }

  // if this is http://localhost....  then we need to fall back to basic auth
  if (store.state.session.currentService.host.startsWith('http://localhost')) {
    req.auth = {
      username: store.state.session.currentService.username,
      password: store.state.session.currentService.password
    }
  }

  try {
    // try the request once
    let response = await axios(req)

    // if authentication failed, it means we have no cookie or a stale one
    if (response.status === 401) {
      // get a new cookie
      console.log('401 - getting new session')
      const authResponse = await couch.getSession(store.state.session.currentService.host, store.state.session.currentService.username, store.state.session.currentService.password)

      // if that worked - retry the request
      if (authResponse) {
        response = await axios(req)
      }
    }

    // throw error for bad status codes
    if (response.status > 300) {
      throw new Error(response)
    }
    return response.data
  } catch (e) {
    console.error(e)
    return null
  }
}

// a subset of the CouchDB API
const couch = {
  getSession: async function (url, username, password) {
    const req = {
      method: 'post',
      baseURL: url,
      url: '/_session',
      data: {
        name: username,
        password: password
      },
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response
    } catch (e) {
      return null
    }
  },
  loadDbs: async function (store) {
    return await request(store, 'get', '/_all_dbs', {}, undefined)
  },
  getDBInfo: async function (store, db) {
    const url = `/${encodeURIComponent(db)}`
    return await request(store, 'get', url, {}, undefined)
  },
  getDocs: async function (store, db, prefix, page) {
    if (!page) {
      page = 1
    }
    const url = `/${encodeURIComponent(db)}/_all_docs`
    const params = {
      include_docs: true,
      skip: (page - 1) * 20,
      limit: 20
    }
    if (prefix) {
      params.startkey = JSON.stringify(prefix)
      params.endkey = JSON.stringify(prefix + 'z')
    }
    return await request(store, 'get', url, params, undefined)
  },
  getDoc: async function (store, db, id) {
    const url = `/${encodeURIComponent(db)}/${id}`
    return await request(store, 'get', url, {}, undefined)
  },
  putDB: async function (store, db, options) {
    const url = `/${encodeURIComponent(db)}`
    return await request(store, 'put', url, options, undefined)
  },
  postDoc: async function (store, db, doc) {
    const url = `/${encodeURIComponent(db)}`
    return await request(store, 'post', url, {}, doc)
  },
  deleteDoc: async function (store, db, doc) {
    const url = `/${encodeURIComponent(db)}/${doc._id}`
    return await request(store, 'delete', url, { rev: doc._rev }, undefined)
  },
  explain: async function (store, db, query) {
    const url = `/${encodeURIComponent(db)}/_explain`
    return await request(store, 'post', url, { }, query)
  },
  find: async function (store, db, query) {
    const url = `/${encodeURIComponent(db)}/_find`
    return await request(store, 'post', url, { }, query)
  }
}

export default couch
