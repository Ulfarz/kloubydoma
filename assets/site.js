// Câblage des CTA : data-offer -> window.DD_LINKS, fallback page de disclosure.
(function () {
  var FALLBACK = '/povaha-webu/';
  function bind() {
    document.querySelectorAll('[data-offer]').forEach(function (el) {
      var key = el.getAttribute('data-offer');
      var url = (window.DD_LINKS || {})[key] || null;
      if (url) {
        el.setAttribute('href', url);
        el.setAttribute('rel', 'sponsored nofollow noopener');
        el.setAttribute('target', '_blank');
      } else {
        el.setAttribute('href', FALLBACK);
        el.setAttribute('title', 'Odkaz na prodejce zatím není aktivní');
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
