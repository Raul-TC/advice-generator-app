export function DesignSvgCard() {
  const $pattern = document.createElement("img");

  $pattern.classList.add("pattern");

  $pattern.src = "app/assets/pattern-divider-desktop.svg";
  $pattern.alt = "pattern-design";

  return $pattern;
}
