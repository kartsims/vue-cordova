exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof device === 'undefined' || typeof device.cordova === 'undefined') {
      return cb(false)
    }

    // default values
    Vue.cordova.device = {
      cordova: null,
      model: null,
      platform: null,
      uuid: null,
      version: null,
      manufacturer: null,
      isVirtual: null,
      serial: null
    }

    Object.keys(Vue.cordova.device).forEach(key => {
      if (typeof device[key] !== 'undefined') {
        Vue.cordova.device[key] = device[key]
      }
    })

    return cb(true)

  }, false)
}
