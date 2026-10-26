# Zero Gravity Easter Egg

A lightweight JavaScript script that turns any webpage into a zero-gravity environment, breaking elements apart and making them float around, inspired by the classic Google Gravity.

<img width="960" height="408" alt="{CAAB6D72-5B27-41D0-B75A-B6AA2FA39B07}" src="https://github.com/user-attachments/assets/3dd0bf20-decb-40d9-9cbf-1aa1c5901d68" />

## How to Use

### Method 1: Bookmarklet (Easiest)
1. Create a new bookmark in your browser.
2. Name it `Zero Gravity 🚀`.

<img width="200" height="49" alt="{9720244B-D018-4735-B16A-BC3641DE910D}" src="https://github.com/user-attachments/assets/39649acc-7783-4d59-a13e-221364757b8e" />

3. Paste the following code into the **URL** field (replace `YOUR_USERNAME` with your GitHub username):
   ```javascript
   javascript:(function(){const s=document.createElement('script');s.src='https://jsdelivr.net;})();
   ```
4. Visit any website and click the bookmark!

### Method 2: Browser Console
1. Open the Developer Tools (`F12` or `Ctrl+Shift+I`) on any website.
2. Go to the **Console** tab.
3. Paste the code from `gravity.js` and press **Enter**.

## How it Works
The script selects all visible elements on the page, absolute-positions them so they don't break the layout initially, and applies a basic physics loop to simulate floating, bouncing, and zero-gravity drift.

---
