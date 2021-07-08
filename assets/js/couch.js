const { default: axios } = require('axios')

// make an HTTP request to the currently selected service
const request = async function (store, method, url, params, data) {
  const req = {
    method: method,
    baseURL: store.state.session.currentService.host,
    auth: {
      username: store.state.session.currentService.username,
      password: store.state.session.currentService.password
    },
    url: url,
    params: params,
    data: data,
    withCredentials: true
  }
  try {
    const response = await axios(req)
    return response.data
  } catch (e) {
    console.error(e)
    return null
  }
}

// a subset of the CouchDB API
const couch = {
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
  putDoc: async function (store, db, doc) {
    const url = `/${encodeURIComponent(db)}`
    return await request(store, 'put', url, {}, doc)
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
