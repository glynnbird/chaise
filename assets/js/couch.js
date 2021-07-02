const { default: axios } = require('axios')

const couch = {
  loadDbs: async function (store) {
    const req = {
      method: 'get',
      baseURL: store.state.cache.couchCredentials.url,
      auth: {
        username: store.state.cache.couchCredentials.username,
        password: store.state.cache.couchCredentials.password
      },
      url: '/_all_dbs',
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      console.error(e)
      return null
    }
  },
  getDBInfo: async function (store, db) {
    const req = {
      method: 'get',
      baseURL: store.state.cache.couchCredentials.url,
      auth: {
        username: store.state.cache.couchCredentials.username,
        password: store.state.cache.couchCredentials.password
      },
      url: '/' + encodeURIComponent(db),
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      console.error(e)
      return null
    }
  },
  getDocs: async function (store, db, prefix, skip) {
    const req = {
      method: 'get',
      baseURL: store.state.cache.couchCredentials.url,
      auth: {
        username: store.state.cache.couchCredentials.username,
        password: store.state.cache.couchCredentials.password
      },
      url: '/' + encodeURIComponent(db) + '/_all_docs',
      params: {
        include_docs: false,
        limit: 10
      },
      withCredentials: true
    }
    if (prefix) {
      req.params.startkey = JSON.stringify(prefix)
      req.params.endkey = JSON.stringify(prefix + 'z')
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      console.error(e)
      return null
    }
  },
  getDoc: async function (store, db, id) {
    const req = {
      method: 'get',
      baseURL: store.state.cache.couchCredentials.url,
      auth: {
        username: store.state.cache.couchCredentials.username,
        password: store.state.cache.couchCredentials.password
      },
      url: '/' + encodeURIComponent(db) + '/' + encodeURIComponent(id),
      withCredentials: true
    }
    console.log(req.url)
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      console.error(e)
      return null
    }
  },
  putDB: async function (store, db, options) {
    const req = {
      method: 'put',
      baseURL: store.state.cache.couchCredentials.url,
      auth: {
        username: store.state.cache.couchCredentials.username,
        password: store.state.cache.couchCredentials.password
      },
      params: options || {},
      url: '/' + encodeURIComponent(db),
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      console.error(e)
      return null
    }
  },
  putDoc: async function (store, db, doc) {
    const req = {
      method: 'post',
      baseURL: store.state.cache.couchCredentials.url,
      auth: {
        username: store.state.cache.couchCredentials.username,
        password: store.state.cache.couchCredentials.password
      },
      data: doc,
      url: '/' + encodeURIComponent(db),
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
}

export default couch
