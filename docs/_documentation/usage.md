---
title: Usage
position: 3
---

Use [Cordova events](https://cordova.apache.org/docs/en/latest/cordova/events/events.html) to run code at the right moment. Full list of events and compatibility table [here](https://cordova.apache.org/docs/en/latest/cordova/events/events.html).

```javascript
// listen to Cordova event
Vue.cordova.on('deviceready', () => {
  console.log('Cordova : device is ready !');
});
```

Cordova plugins are also supported by `vue-cordova`. They will be made available in `Vue.cordova.plugins` array. Full supported plugins list below.

Most plugins will only be accessible after `deviceready` event has been triggered.
{: .warning }
