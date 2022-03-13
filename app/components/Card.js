import { AdviceText } from "./AdviceText.js";
import { DesignSvgCard } from "./DesignSvgCard.js";
import { DiceCard } from "./DiceCard.js";
import { Generate } from "./Generate.js";
import { NumberAdvice } from "./NumberAdvice.js";

export function Card() {
  // let { id, advice } = props.slip;
  // let { type, text } = props.message;
  // console.info(props.message.type, props.message.text);
  const $card = document.createElement("div");
  $card.classList.add("card");

  // if (props.message) {
  //   $card.innerHTML = `
  // <div class="containerInfo">
  // <p>"${props.message.type} 404: ${props.message.text}"</p>
  // </div>
  // <img src="app/assets/pattern-divider-desktop.svg" class="pattern" alt="pattern-desktop">
  //   <span class="dice">
  //   <img src="app/assets/dice-svgrepo-com.svg" alt="diice-generator">
  //   </span>

  //   `;
  // } else {
  $card.innerHTML = `
     <div class="containerInfo">
    <h1>ADVICE #</h1>
   <p>"undefined"</p>
     </div>
   <img src="app/assets/pattern-divider-desktop.svg" class="pattern" alt="pattern-design">
      <span class="dice">
      <img src="app/assets/dice-svgrepo-com.svg" alt="diice-generator">
      </span>

     `;
  // }

  setTimeout(() => {
    if (window.screen.width < 428) {
      document.querySelector(".card img").src =
        "app/assets/pattern-divider-mobile.svg";
    }
  }, 100);

  return $card;
}
