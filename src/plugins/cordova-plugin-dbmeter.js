exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof DBMeter === 'undefined') {
      return cb(false)
    }

    Vue.cordova.dbmeter = DBMeter;

    return cb(true)

  }, false)
}
