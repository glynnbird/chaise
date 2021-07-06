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
  deleteService (state, id) {
    for (const k in state.services) {
      const service = state.services[k]
      if (service.id === id) {
        state.services.splice(k, 1)
        localstorage.saveProfile({ services: state.services })
        break
      }
    }
  },
  deleteAllServices (state) {
    state.services = []
    localstorage.deleteProfile()
  },
  setCurrentService (state, service) {
    state.currentService = service
  }
}
