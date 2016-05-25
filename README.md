[Vue.js](https://vuejs.org/) plugin for [Cordova](https://cordova.apache.org/)

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

This object provides API for the following [events](#event) and will hold the Cordova [plugins](#plugins) API objects you might be using.

### Setup Cordova

Make sure you have properly configured Cordova. As any other Cordova project, you need to :

1. Include `cordova.js` in your `index.html` (see [Troubleshooting](#troubleshooting) below)
1. Have any necessary plugin installed `cordova plugin add cordova-plugin-device`

# Events

Trigger functions when [Cordova events](https://cordova.apache.org/docs/en/latest/cordova/events/events.html) are fired.

```javascript
Vue.cordova.on('deviceready', () => {
  console.log('Cordova : device is ready !');
});
```

Full list of events and compatibility table [here](https://cordova.apache.org/docs/en/latest/cordova/events/events.html).

# Plugins

Cordova plugins are also supported by `vue-cordova`. You may load them while calling `Vue.use` :

```javascript
var Vue = require('vue');
var VueCordova = require('vue-cordova');
Vue.use(VueCordova, {
  plugins: ['device']
});
```

### Supported plugins

- [Cordova Device Plugin](https://www.npmjs.com/package/cordova-plugin-device)

*More coming soon...*

You may help implementing those awesome plugins ! Create your own Cordova plugin support for Vue by creating a NPM package `vue-cordova-pluginname` and send a PR to this repo :)

### Cordova Device Plugin

`Vue.cordova.device` describes the device's hardware and software.

See [plugin's README](https://www.npmjs.com/package/cordova-plugin-device) and [vue-cordova-device](https://www.npmjs.com/package/vue-cordova-device) for more information.

# Troubleshooting

##### My events don't seem to be fired

Cordova documentation isn't obvious on this point but you need to include the following `script` tag in your `www/index.html`.

```html
<script src="cordova.js"></script>
```

##### One of my plugins is not working properly

Did you install the plugin in your Cordova project ?

```shell
cordova plugin add cordova-plugin-device
```

##### The `Vue.cordova.xxx` object is null

You probably need to wait for the `deviceready` event to fire. Keep calm and try to :

```javascript
Vue.cordova.on('deviceready', () => {
  // your code here
});
```
