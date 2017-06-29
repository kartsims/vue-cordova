---
title: SMS
add_url: cordova-plugin-sms
description: Send sms messages from the device
---

SMS is made available in `Vue.cordova.sms`. This is used only for sending SMS messages.

###### Sample code

```javascript
let number = '1231231234'
let message = 'hello'
let options = {
  replaceLineBreaks: false,
  android: {
    intent: 'INTENT' // send SMS with native android SMS app
    // intent: '' // send SMS directly without opening another app
  }
}
let success = () => { console.log('success') }
let error = (e) => { console.log('error : ', e) }

Vue.cordova.sms.send(number, message, options, success, error)
```

###### Install

```bash
cordova plugin add cordova-sms-plugin
```

###### Source

<a href="https://www.npmjs.com/package/cordova-sms-plugin" target="_blank" class="icon npm">cordova-sms-plugin</a>
