(function () {
  function updateTOCHighlight() {
    const fragment = decodeURIComponent(window.location.hash || '');
    const links = document.querySelectorAll('.md-nav__item .md-nav__link');

    links.forEach(link => {
      link.classList.remove('fragment-active');

      if (link.getAttribute('href') === fragment) {
        link.classList.add('fragment-active');
        // Also open collapsed parents
        const parent = link.closest('.md-nav__item');
        if (parent) parent.classList.add('md-nav__item--active');
      } else {
        const parent = link.closest('.md-nav__item');
        if (parent) parent.classList.remove('md-nav__item--active');
      }
    });
  }

  // Run on load + hash change
  window.addEventListener('DOMContentLoaded', updateTOCHighlight);
  window.addEventListener('hashchange', updateTOCHighlight);

  // Forcefully suppress Material’s scroll-based highlighting
  const tocContainer = document.querySelector('.md-nav');
  if (tocContainer) {
    const observer = new MutationObserver(() => {
      // Wipe all Material-injected active classes
      document.querySelectorAll('.md-nav__link--active').forEach(link => {
        link.classList.remove('md-nav__link--active');
      });
      updateTOCHighlight();
    });

    observer.observe(tocContainer, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }
})();
