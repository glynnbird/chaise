import Vue from 'vue'

Vue.filter('stripDoc', function (doc) {
  const d = JSON.parse(JSON.stringify(doc))
  delete d._id
  delete d._rev
  return JSON.stringify(d)
})

Vue.filter('truncateRev', function (rev) {
  return rev.split('-')[0]
})
