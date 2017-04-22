exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof chrome.sockets.tcp === 'undefined') {
      return cb(false)
    }

    // pass through the object
    Vue.cordova.chromeSocketsTcp = chrome.sockets.tcp

    return cb(true)

  }, false)
}
