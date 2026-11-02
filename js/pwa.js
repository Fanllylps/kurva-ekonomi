(function () {
  'use strict';

  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(function (error) {
      console.error('Kurva offline cache could not be installed.', error);
    });
  });
})();
