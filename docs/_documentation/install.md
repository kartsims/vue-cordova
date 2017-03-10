---
title: Install
position: 2
---

Make sure you have properly configured Cordova. As any other Cordova project, you need to :

1. Include `cordova.js` in your `index.html` (see *Troubleshooting* below)
1. Have any necessary plugin installed `cordova plugin add <cordova-plugin-name-or-url>`

If you are using Vue.js's Webpack template, you can add the following code in `main.js` (code from [`vue-cordova-demo`](https://github.com/kartsims/vue-cordova-demo))

```javascript
// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
```
