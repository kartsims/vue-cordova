---
title: Troubleshooting
position: 5
---


#### "My events don't seem to be fired"

Cordova documentation isn't obvious about it but you need to include the following `script` tag in your `www/index.html`.

```html
<script src="cordova.js"></script>
```

#### "One of my plugins is not working properly"

Did you install the plugin in your Cordova project ?

```shell
cordova plugin add cordova-plugin-device
```

#### "The `Vue.cordova.xxx` object is null"

You probably need to wait for the `deviceready` event to fire. Keep calm and wrap your code in an event listener :

```javascript
Vue.cordova.on('deviceready', () => {
  // your code here
});
```
