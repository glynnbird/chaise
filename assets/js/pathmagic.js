const pathmagic = {
  db: function (dbName) {
    const encoded = encodeURIComponent(dbName)
    return `/db/${encoded}`
  },
  doc: function (dbName, id) {
    const encoded = encodeURIComponent(id)
    return `${this.db(dbName)}/${encoded}`
  }
}

export default pathmagic
