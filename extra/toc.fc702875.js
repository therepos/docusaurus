document.addEventListener("DOMContentLoaded", function () {
  const tocLinks = document.querySelectorAll(".md-nav__item .md-nav__link");

  function setActiveLinkFromFragment() {
    const fragment = decodeURIComponent(window.location.hash);
    if (!fragment) return;

    tocLinks.forEach(link => {
      link.classList.remove("fragment-active");

      if (link.getAttribute("href") === fragment) {
        link.classList.add("fragment-active");
      }
    });
  }

  setActiveLinkFromFragment();
  window.addEventListener("hashchange", setActiveLinkFromFragment);
});
