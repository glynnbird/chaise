export const state = () => ({
  dbList: [],
  currentDB: null,
  currentID: null,
  lastDBInfo: null,
  recents: [],
  lastSQL: null,
  lastSQLDBName: null,
  lastSQLResults: null
})

export const mutations = {
  reset (state) {
    state.dbList = []
    state.currentDB = null
    state.currentID = null
    state.lastDBInfo = null
    state.recents = []
  },
  setDbList (state, list) {
    state.dbList = list
  },
  addDb (state, db) {
    state.dbList.push(db)
    state.dbList.sort()
  },
  deleteDb (state, db) {
    const pos = state.dbList.indexOf(db)
    state.dbList.splice(pos, 1)
  },
  setCurrentDB (state, dbname) {
    state.currentDB = dbname
  },
  setCurrentID (state, id) {
    state.currentID = id
  },
  setLastDBInfo (state, info) {
    state.lastDBInfo = info
  },
  addToRecents (state, db) {
    for (const d of state.recents) {
      if (d === db) {
        return
      }
    }
    state.recents.unshift(db)
    if (state.recents.length > 10) {
      state.recents.splice(10)
    }
  },
  setLastSQL (state, sql) {
    state.lastSQL = sql
  },
  setLastSQLDBName (state, dbName) {
    state.lastSQLDBName = dbName
  },
  setLastSQLResults (state, results) {
    state.lastSQLResults = results
  }
}
