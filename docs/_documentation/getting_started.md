---
title: Getting Started
position: 1
---


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

This object provides API to listen to Cordova events, and access plugins' APIs.


<!--
Welcome to our API.

This API document is designed for those interested in developing for our platform.

This API is still under development and will evolve.

You'll succeed if you do this.
{: .success }

Here's some useful information.
{: .info }

Something may not happen if you try and do this.
{: .warning }

Something bad will happen if you do this.
{: .error } -->
