---
title: BarcodeScanner
add_url: cordova-plugin-barcodescanner
description: Access the barcodescanner plugin
---

The Barcode Scanner is made available in `Vue.cordova.barcodeScanner`. You may then access the two functions to scan and encode barcodes.

Works with `cordova-plugin-barcodescanner` and the better `phonegap-plugin-barcodescanner` (which supports configuration options as third argument in the scan function and works also on Android API level >=23)

###### Sample code
With the `phonegap-plugin-barcodescanner`:
```javascript
Vue.cordova.barcodeScanner.scan(
    function (result) {
      alert('We got a barcode\n' +
      'Result: ' + result.text + '\n' +
      'Format: ' + result.format + '\n' +
      'Cancelled: ' + result.cancelled)
    },
    function (error) {
      alert('Scanning failed: ' + error)
    },
    {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      saveHistory: false, // Android, save scan history (default false)
      prompt: 'Scan a barcode', // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      // formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
      // orientation: 'landscape', // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS and Android
    }
  )
}
```

With the `cordova-plugin-barcodescanner`:
```javascript
Vue.cordova.barcodeScanner.scan(
    function (result) {
      alert('We got a barcode\n' +
      'Result: ' + result.text + '\n' +
      'Format: ' + result.format + '\n' +
      'Cancelled: ' + result.cancelled)
    },
    function (error) {
      alert('Scanning failed: ' + error)
    }
  )
}
```

###### Install

```bash
cordova plugin add phonegap-plugin-barcodescanner
```
or
```bash
cordova plugin add cordova-plugin-barcodescanner
```

###### Source

<a href="https://www.npmjs.com/package/phonegap-plugin-barcodescanner" target="_blank" class="icon npm">phonegap-plugin-barcodescanner</a>

<a href="https://www.npmjs.com/package/cordova-plugin-barcodescanner" target="_blank" class="icon npm">cordova-plugin-barcodescanner</a>
