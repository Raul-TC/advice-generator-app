export function Generate(props) {
  const $generate = document.createElement("div");
  $generate.classList.add("containerInfo");
  let { id, advice } = props.slip;

  if (props.message) {
    $generate.innerHTML = `
       <blockquote>"${props.message.type} 404: ${props.message.text}"</blockquote>
         `;
  } else {
    $generate.innerHTML = `
       <h1>ADVICE #${id}</h1>
       <blockquote>"${advice}"</blockquote>
    `;
  }

  return $generate.innerHTML;
}
