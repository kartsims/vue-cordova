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

This object provides API for the following [events](#events) and will hold the Cordova [plugins](#plugins) API objects you might be using.

### Demo

A repository with a [full working demo](https://github.com/kartsims/vue-cordova-demo) is available to help you bootstrap a new project or cherry-pick working code.

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

Cordova plugins are also supported by `vue-cordova`. Plugins are automatically spotted and made available in `Vue.cordova.plugins` array.

### Supported plugins

Plugins information and support list is in [PLUGINS.md](https://github.com/kartsims/vue-cordova/blob/master/PLUGINS.md).

There are many Cordova plugins out there and you may help us getting them supported ! It's pretty easy, see below.

### Add a new plugin

1. Create a file named by the plugin in the `plugins/` directory
1. Add your plugin to the list in `src/index.js`
1. Write a tiny doc in `PLUGINS.MD` and update this `README.md`
1. PR ;)

# Troubleshooting

##### My events don't seem to be fired

Cordova documentation isn't obvious about it but you need to include the following `script` tag in your `www/index.html`.

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
