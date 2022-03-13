export function NumberAdvice(props) {
  const $h1 = document.createElement("h1");

  $h1.classList.add("adviceNumber");
  $h1.textContent = `ADVICE #${props.id}`;

  return $h1;
}
