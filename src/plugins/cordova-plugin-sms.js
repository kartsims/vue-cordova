exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.sms === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.cordova.sms = window.sms

    return cb(true)

  }, false)
}
