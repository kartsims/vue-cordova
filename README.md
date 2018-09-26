[Vue.js](https://vuejs.org/) plugin for [Cordova](https://cordova.apache.org/)

> Note : Compatible with every version of VueJS (1.x and 2.x)



# You may not need Vue-Cordova

Important Note: You **DO NOT** need Vue-Cordova to use Vue with Cordova or access Cordova plugins from Vue components. Vue-Cordova is a utility that makes the following plugins available in Vue components under ```Vue.cordova```:

```
cordova-plugin-camera
cordova-plugin-device
cordova-plugin-geolocation
cordova-plugin-contacts
cordova-plugin-chrome-apps-sockets-tcp
cordova-plugin-sms
```


If you are using a different Cordova plugin you can access it directly from a Vue component from the ```window.cordova``` object & you can avoid this library entirely. For example, if you installed the [barcode scanner](https://github.com/phonegap/phonegap-plugin-barcodescanner#using-the-plugin) plugin you could access its ```scan``` method in a Vue component like this:

```js
cordova.plugins.barcodeScanner.scan((result) => {console.log(result)}, (err) => {console.err(error)});
```

Note: This assumes that the plugin (1) installed correctly, (2) Cordova emitted the 'deviceready' event, (3) ```cordova.js``` is available to the application

If you still wish to use Vue-Cordova see **[here for instructions](http://kartsims.github.io/vue-cordova/#documentationcontribute)** on how to register a new plugin with this tool. 

# Future 

Please note that this tool will no longer be maintained or supported

# How to use

Add the NPM package to your project

```shell
npm install --save vue-cordova
```

Add the plugin to your Vue instance according to your setup

```javascript
// CommonJS
var Vue = require('vue');
var VueCordova = require('vue-cordova');
Vue.use(VueCordova);

// import
import Vue from 'vue'
import VueCordova from 'vue-cordova'
Vue.use(VueCordova)
```

The package provides a global object `Vue.cordova`

```javascript
console.log(Vue.cordova);
```

This object provides API for the following [events](#events) and will hold the Cordova [plugins](#plugins) API objects you might be using.

> **This library is a syntax helper.** It provides an easier access to the global variables defined by Cordova.

### Demo

A repository with a [full working demo](https://github.com/kartsims/vue-cordova-demo) is available to help you bootstrap a new project or cherry-pick working code.

### Documentation

For more information, check out [http://kartsims.github.io/vue-cordova](http://kartsims.github.io/vue-cordova)

For instructions covering how to add a plugin to Vue-Cordova check out http://kartsims.github.io/vue-cordova/#documentationcontribute
