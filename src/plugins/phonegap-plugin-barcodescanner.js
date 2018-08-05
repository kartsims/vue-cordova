exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.cordova.barcodeScanner === 'undefined') {
      return cb(false)
    }

    // pass through the barcodescanner object
    Vue.cordova.barcodeScanner = window.cordova.barcodeScanner

    return cb(true)

  }, false)
}
