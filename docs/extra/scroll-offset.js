document.addEventListener("DOMContentLoaded", function () {
  var shiftWindow = function() {
    window.scrollBy(0, -100); // adjust -100 based on your header height
  };
  if (location.hash) shiftWindow();
  window.addEventListener("hashchange", shiftWindow);
});
