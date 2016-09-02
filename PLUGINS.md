# Plugins

Here are the **Cordova plugins** you may access by loading `vue-cordova` plugin in your VueJS app.

## Cordova Device Plugin

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
