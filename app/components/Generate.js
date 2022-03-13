export function Generate(props) {
  const $generate = document.createElement("div");
  $generate.classList.add("containerInfo");

  if (props.message) {
    $generate.innerHTML = `
       <blockquote>"${props.message.type} 404: ${props.message.text}"</blockquote>
         `;
  } else {
    $generate.innerHTML = `
       <h1>ADVICE #${props.slip.id}</h1>
       <blockquote>"${props.slip.advice}"</blockquote>
    `;
  }

  return $generate.innerHTML;
}
