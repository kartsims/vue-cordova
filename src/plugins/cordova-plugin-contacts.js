exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.contacts === 'undefined') {
      return cb(false)
    }

    // pass through the contacts object
    Vue.cordova.contacts = navigator.contacts

    return cb(true)

  }, false)
}
