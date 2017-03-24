---
title: Contacts
add_url: cordova-plugin-contacts
description: Access the device's contact database
---

The contacts database is made available in `Vue.cordova.contacts`. You may then find a contact or create a new one.

###### Sample code

```javascript
Vue.cordova.contacts.find(['displayName'], (contacts) => {
  window.alert('Contacts found : ' + contacts.length)
}, (error) => {
  window.alert('FAILED : ' + error.code)
})
```

###### Install

```bash
cordova plugin add cordova-plugin-contacts
```

###### Source

<a href="https://www.npmjs.com/package/cordova-plugin-contacts" target="_blank" class="icon npm">cordova-plugin-contacts</a>
