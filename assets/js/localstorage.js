// get localStorage instance
const myStorage = window.localStorage

// the key we use to save data against in localStorage
const KEY = 'chaise_session'

const localstorage = {
  loadProfile: function () {
    const str = myStorage.getItem(KEY)
    if (str !== null) {
      return JSON.parse(str)
    } else {
      return null
    }
  },
  saveProfile: function (profile) {
    myStorage.setItem(KEY, JSON.stringify(profile))
  },
  deleteProfile: function () {
    myStorage.clear()
  }
}

export default localstorage
