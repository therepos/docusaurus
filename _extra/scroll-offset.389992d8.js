document.addEventListener("DOMContentLoaded", () => {
  const HEADINGS = document.querySelectorAll("main h1, main h2, main h3");
  const OFFSET = 100; // Adjust based on your sticky header

  // Apply scroll-padding-top globally
  document.documentElement.style.scrollPaddingTop = `${OFFSET}px`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          // Update the URL hash without scrolling
          history.replaceState(null, null, `#${id}`);

          // Remove active class from all TOC links
          document.querySelectorAll('.md-nav--secondary .md-nav__link--active')
            .forEach((el) => el.classList.remove('md-nav__link--active'));

          // Add active class to the currently visible heading
          const tocLink = document.querySelector(`.md-nav--secondary .md-nav__link[href="#${id}"]`);
          if (tocLink) {
            tocLink.classList.add('md-nav__link--active');
          }
        }
      });
    },
    {
      rootMargin: `-${OFFSET}px 0px 0px 0px`,
      threshold: 0.25,
    }
  );

  HEADINGS.forEach((heading) => {
    if (heading.id) {
      observer.observe(heading);
    }
  });
});
