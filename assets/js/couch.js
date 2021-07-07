const { default: axios } = require('axios')

const couch = {
  loadDbs: async function (store) {
    const req = {
      method: 'get',
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
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
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
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
  getDocs: async function (store, db, prefix, page) {
    if (!page) {
      page = 1
    }
    const req = {
      method: 'get',
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
      },
      url: '/' + encodeURIComponent(db) + '/_all_docs',
      params: {
        include_docs: true,
        skip: (page - 1) * 20,
        limit: 20
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
      return null
    }
  },
  getDoc: async function (store, db, id) {
    const req = {
      method: 'get',
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
      },
      url: '/' + encodeURIComponent(db) + '/' + encodeURIComponent(id),
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      return null
    }
  },
  putDB: async function (store, db, options) {
    const req = {
      method: 'put',
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
      },
      params: options || {},
      url: '/' + encodeURIComponent(db),
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      return null
    }
  },
  putDoc: async function (store, db, doc) {
    const req = {
      method: 'post',
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
      },
      data: doc,
      url: '/' + encodeURIComponent(db),
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      return null
    }
  },
  deleteDoc: async function (store, db, doc) {
    const req = {
      method: 'delete',
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
      },
      data: doc,
      url: `/${encodeURIComponent(db)}/${doc._id}`,
      params: {
        rev: doc._rev
      },
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      return null
    }
  },
  explain: async function (store, db, query) {
    const req = {
      method: 'post',
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
      },
      data: query,
      url: `/${encodeURIComponent(db)}/_explain`,
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      return null
    }
  },
  find: async function (store, db, query) {
    const req = {
      method: 'post',
      baseURL: store.state.session.currentService.host,
      auth: {
        username: store.state.session.currentService.username,
        password: store.state.session.currentService.password
      },
      data: query,
      url: `/${encodeURIComponent(db)}/_find`,
      withCredentials: true
    }
    try {
      const response = await axios(req)
      return response.data
    } catch (e) {
      return null
    }
  }
}

export default couch
