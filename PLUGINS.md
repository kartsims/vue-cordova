# Plugins

Here are the **Cordova plugins** you may access by loading `vue-cordova` plugin in your VueJS app.

- [Device Plugin](#device-plugin)
- [Camera Plugin](#camera-plugin)
- [Geolocation Plugin](#geolocation-plugin)
- [Contacts Plugin](#contacts-plugin)

## Device Plugin

> Describes the device's hardware and software ([NPM](https://www.npmjs.com/package/cordova-plugin-device))

Device information is made available in `Vue.cordova.device`.

```javascript
// Vue.cordova.device example
{
  "device": {
    "cordova": "4.2.1",
    "model": "x86_64",
    "platform": "iOS",
    "uuid": "XXX-XXX-XXX",
    "version": "9.3",
    "manufacturer": "Apple",
    "isVirtual": true,
    "serial": "unknown"
  }
}
```

## Camera Plugin

> API to access the device's camera ([NPM](https://www.npmjs.com/package/cordova-plugin-camera))

The camera and its API is made available in `Vue.cordova.camera`. The global options in `Camera` are also present there. (don't mind the uppercase "C")

```javascript
// Vue.cordova.camera content
{
  "camera": {
    "DestinationType": {
      "DATA_URL": 0,
      "FILE_URI": 1,
      "NATIVE_URI": 2
    },
    ...
  }
}

// take a picture
Vue.cordova.camera.getPicture((imageURI) => {
  window.alert('Photo URI : ' + imageURI)
}, (message) => {
  window.alert('FAILED : ' + message)
}, {
  quality: 50,
  destinationType: Vue.cordova.camera.DestinationType.FILE_URI
})
```

## Geolocation Plugin

> API to access the device's location ([NPM](https://www.npmjs.com/package/cordova-plugin-geolocation))

The GPS is made available in `Vue.cordova.geolocation`. You may then access the current device's location or watch the current position. See the [original plugin's docs](https://www.npmjs.com/package/cordova-plugin-geolocation).

```javascript
// get current location
Vue.cordova.geolocation.getCurrentPosition((position) => {
  window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
}, (error) => {
  window.alert('FAILED Error #' + error.code + ' ' + error.message)
}, {
  timeout: 1000,
  enableHighAccuracy: true
})
```

## Contacts Plugin

> API to access the device's contact database ([NPM](https://www.npmjs.com/package/cordova-plugin-contacts))

The contacts database is made available in `Vue.cordova.contacts`. You may then find a contact or create a new one.

```javascript
// find contacts
Vue.cordova.contacts.find(['displayName'], (contacts) => {
  window.alert('Contacts found : ' + contacts.length)
}, (error) => {
  window.alert('FAILED : ' + error.code)
})
```
