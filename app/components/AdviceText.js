export function AdviceText(props) {
  const $AdviceContent = document.createElement("div");

  $AdviceContent.classList.add("adviceText");

  $AdviceContent.innerHTML = `<p>"${props.advice}"</p>`;

  return $AdviceContent;
}
