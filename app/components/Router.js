import { fetchRequest } from "../helpers/fetchRequest.js";
import { Card } from "./Card.js";
import { Generate } from "./Generate.js";

export async function Router() {
  const $main = document.getElementById("main");
  let { hash } = location;
  let random = Math.floor(Math.random() * 224);

  if (!hash || !hash === "#/") {
    $main.appendChild(Card());
    await fetchRequest({
      url: `https://api.adviceslip.com/advice/${random}`,
      cbSuccess: (advice) => {
        console.info(advice);
        document.querySelector(".containerInfo").innerHTML = Generate(advice);
      },
    });
  } else {
    $main.innerHTML = "Holi";
  }
}
