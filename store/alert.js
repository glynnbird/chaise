export const state = () => ({
  alertData: null
})

export const mutations = {
  insertAlert (state, obj) {
    // obj contains alertType, alertMessage
    if (!obj.alertType) {
      obj.alertType = 'error'
    }
    state.alertData = obj
  },
  clearAlert (state) {
    state.alertData = null
  }
}
