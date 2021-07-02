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
      return []
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
      url: '/' + db,
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      console.error(e)
      return {}
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
      url: '/' + db + '/_all_docs',
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
      return {}
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
      url: '/' + db + '/' + id,
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      console.error(e)
      return {}
    }
  }
}

export default couch
