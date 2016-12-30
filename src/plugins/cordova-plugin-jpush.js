exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.jpush === 'undefined') {
      return cb(false)
    }

    // pass through the jpush object
    Vue.cordova.jpush = navigator.jpush

    return cb(true)

  }, false)
}
