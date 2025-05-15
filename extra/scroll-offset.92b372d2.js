document.addEventListener("DOMContentLoaded", () => {
  const HEADINGS = document.querySelectorAll("main h1, main h2, main h3");
  const OFFSET = 100; // Adjust if your sticky header is larger/smaller

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          history.replaceState(null, null, `#${entry.target.id}`);
        }
      }
    },
    {
      rootMargin: `-${OFFSET}px 0px 0px 0px`,
      threshold: 1.0,
    }
  );

  HEADINGS.forEach((h) => {
    if (h.id) observer.observe(h);
  });
});
