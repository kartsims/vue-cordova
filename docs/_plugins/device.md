---
title: Device
add_url: cordova-plugin-device
description: Describes the device's hardware and software
---

Device information is made available in `Vue.cordova.device`.

###### Sample code

```javascript
console.log(Vue.cordova.device)
/*
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
*/
```

###### Install

```bash
cordova plugin add cordova-plugin-device
```

###### Source

<a href="https://www.npmjs.com/package/cordova-plugin-device" target="_blank" class="icon npm">cordova-plugin-device</a>
