---
title: Barcode Scanner
add_url: cordova-plugin-barcodescanner OR phonegap-plugin-barcodescanner
description: Cross-platform BarcodeScanner for Cordova / PhoneGap.
---

Scanner is made available in `Vue.cordova.plugins.barcodeScanner`.

###### Sample code

```javascript
Vue.cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
```

###### Install

```bash
cordova plugin add cordova-barcodescanner
```
This other plugin seems to be more active
```bash
cordova plugin add phonegap-plugin-barcodescanner
```

###### Source
<a href="https://www.npmjs.com/package/cordova-plugin-barcodescanner" target="_blank" class="icon npm">cordova-plugin-barcodescanner</a>
<a href="https://www.npmjs.com/package/phonegap-plugin-barcodescanner" target="_blank" class="icon npm">phonegap-plugin-barcodescanner</a>
