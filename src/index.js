import VueCordovaDevice from 'vue-cordova-device'

// plugins individual configuration
let plugins = {

  // vue-cordova-device
  device: (Vue) => {
    Vue.use(VueCordovaDevice)
  }

}

exports.install = (Vue, options) => {

  // set global Vue.cordova object if it doesn't exist yet
  Vue.cordova = Vue.cordova || {}

  // Cordova events wrapper
  Vue.cordova.on = (eventName, cb) => {
    document.addEventListener(eventName, cb, false);
  }

  // load plugins array
  if (typeof options.plugins !== 'undefined' && typeof options.plugins.forEach !== 'undefined') {
    options.plugins.forEach((pluginName) => {

      if (typeof plugins[pluginName] === 'undefined') {
        console.error(`Vuejs Cordova plugin '${pluginName}' doesn't exist`)
      } else {
        plugins[pluginName](Vue)
      }

    })
  }
}
