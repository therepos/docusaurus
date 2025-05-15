document.addEventListener("DOMContentLoaded", () => {
  const HEADINGS = document.querySelectorAll("main h1, main h2, main h3");
  const OFFSET = 100; // Adjust based on your sticky header

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          history.replaceState(null, null, `#${entry.target.id}`);
        }
      });
    },
    {
      rootMargin: `-${OFFSET}px 0px -80% 0px`, // offset top and bottom
      threshold: 0.1, // Trigger when at least 10% is visible
    }
  );

  HEADINGS.forEach((h) => {
    if (h.id) observer.observe(h);
  });
});

customElements.define("h7", class extends HTMLElement {});