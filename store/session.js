import localstorage from '~/assets/js/localstorage'

export const state = () => ({
  services: [],
  currentService: null
})

export const mutations = {
  loadServices (state, services) {
    state.services = services
  },
  addService (state, service) {
    state.services.push(service)
    localstorage.saveProfile({ services: state.services })
  },
  deleteAllServices (state) {
    state.services = []
    localstorage.deleteProfile()
  },
  setCurrentService (state, service) {
    state.currentService = service
  }
}
