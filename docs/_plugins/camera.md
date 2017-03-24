---
title: Camera
add_url: cordova-plugin-camera
description: API to access the device's camera
---

Cordova Camera Plugin's API is made available in `Vue.cordova.camera`, including methods and global options.

###### Sample code

```javascript
Vue.cordova.camera.getPicture((imageURI) => {
  window.alert('Photo URI : ' + imageURI)
}, (message) => {
  window.alert('FAILED : ' + message)
}, {
  quality: 50,
  destinationType: Vue.cordova.camera.DestinationType.FILE_URI
})
```

###### Install

```bash
cordova plugin add cordova-plugin-camera
```

###### Source

<a href="https://www.npmjs.com/package/cordova-plugin-camera" target="_blank" class="icon npm">cordova-plugin-camera</a>
