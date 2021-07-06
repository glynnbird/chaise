import localstorage from '~/assets/js/localstorage'

export default async function ({ store, redirect, route }) {
  // make sure that if localstorage says we're logged in that
  // the stored data makes it to the profile
  const profile = localstorage.loadProfile()
  if (profile !== null) {
    store.commit('session/loadServices', profile.services)
  }

  if (!profile || store.state.session.currentService === null) {
    if (route.path !== '/settings') {
      redirect('/settings')
    }
  }
}
