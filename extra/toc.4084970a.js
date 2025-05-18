document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;

  if (hash) {
    const tocLinks = document.querySelectorAll(".md-nav__item .md-nav__link");
    tocLinks.forEach(link => {
      link.classList.remove("md-nav__link--active");
      if (link.getAttribute("href") === hash) {
        link.classList.add("md-nav__link--active");
      }
    });
  }

  // Optional: re-enable scroll-based activation after scroll
  let userScrolled = false;
  window.addEventListener("scroll", () => {
    if (!userScrolled) {
      userScrolled = true;
      // Optionally, re-enable default scroll detection or just leave it alone
    }
  });
});
