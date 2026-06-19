export function scrollToTop(event) {
  if (event) event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
