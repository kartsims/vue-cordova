exports.install = (Vue, options) => {

  // declare global Vue.cordova object
  Vue.cordova = Vue.cordova || {
    deviceready: false
  }

  // Cordova events wrapper
  Vue.cordova.on = (eventName, cb) => {
    document.addEventListener(eventName, cb, false)
  }

  // let Vue know that deviceready has been triggered
  document.addEventListener('deviceready', () => {
    Vue.cordova.deviceready = true
  }, false)

  // load supported plugins
  let pluginsList = [
    'cordova-plugin-device'
  ]
  pluginsList.forEach(pluginName => {
    let pluginLoaded = require('./plugins/' + pluginName)(Vue, options)
    console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded')
  })

}
