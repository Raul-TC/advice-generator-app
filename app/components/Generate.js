export function Generate(props) {
  const $generate = document.createElement("div");
  $generate.classList.add("containerInfo");
  console.info(props);

  if (props.message) {
    $generate.innerHTML = `
       <p>"${props.message.type} 404: ${props.message.text}"</p>
         `;
  } else {
    $generate.innerHTML = `
       <h1>ADVICE #${props.slip.id}</h1>
       <p>"${props.slip.advice}"</p>
    `;
    console.info("true");
  }

  return $generate.innerHTML;
}
