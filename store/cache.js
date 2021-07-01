export const state = () => ({
  couchCredentials: {
    url: process.env.COUCH_URL,
    username: process.env.COUCH_USERNAME,
    password: process.env.COUCH_PASSWORD
  },
  dbList: [],
  lastDBInfo: null,
  recents: []
})

export const mutations = {
  setDbList (state, list) {
    state.dbList = list
  },
  deleteDb (state, db) {
    const pos = state.dbList.indexOf(db)
    state.dbList.splice(pos, 1)
  },
  setCouchCredentials (state, creds) {
    state.couchCredentials = creds
  },
  setLastDBInfo (state, info) {
    state.lastDBInfo = info
  },
  addToRecents (state, db) {
    for (const d of state.recents) {
      if (d.db_name === db.db_name) {
        return
      }
    }
    state.recents.unshift(db)
    if (state.recents.length > 10) {
      state.recents.splice(10)
    }
  }
}
