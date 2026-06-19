/** Smoothly scroll to the very top of the page. */
export function scrollToTop(event) {
  if (event) event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Smoothly scroll to a section by its element id,
 * accounting for the sticky navbar height.
 * @param {string} id – the element's id (without the #)
 * @param {number} [offset=80] – px to subtract for the navbar
 */
export function scrollToSection(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
