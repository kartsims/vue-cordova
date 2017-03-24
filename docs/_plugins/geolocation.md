---
title: Geolocation
add_url: cordova-plugin-geolocation
description: Access the geolocation's GPS tracker
---

The GPS is made available in `Vue.cordova.geolocation`. You may then access the current device's location or watch the current position.

###### Sample code

```javascript
Vue.cordova.geolocation.getCurrentPosition((position) => {
  window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
}, (error) => {
  window.alert('FAILED Error #' + error.code + ' ' + error.message)
}, {
  timeout: 1000,
  enableHighAccuracy: true
})
```

###### Install

```bash
cordova plugin add cordova-plugin-geolocation
```

###### Source

<a href="https://www.npmjs.com/package/cordova-plugin-geolocation" target="_blank" class="icon npm">cordova-plugin-geolocation</a>
