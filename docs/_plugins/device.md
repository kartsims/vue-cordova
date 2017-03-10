---
title: Device
add_url: cordova-plugin-device
description: Describes the device's hardware and software
---


Device information is made available in `Vue.cordova.device` :

```json
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

Device information will be available only after `deviceready` event is triggered.
{: .info }

###### Install

```bash
cordova plugin add cordova-plugin-device
```

<a href="https://www.npmjs.com/package/cordova-plugin-device" target="_blank" class="icon npm">cordova-plugin-device</a>
