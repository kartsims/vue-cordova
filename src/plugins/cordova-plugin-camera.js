exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.camera === 'undefined') {
      return cb(false)
    }

    // pass through the camera object
    Vue.cordova.camera = navigator.camera

    return cb(true)

  }, false)
}
