import { Card } from "../components/Card.js";
import { fetchRequest } from "./fetchRequest.js";

export async function RandomNumber() {
  document.addEventListener("click", async (e) => {
    if (e.target.matches(".dice *")) {
    }
    let random = Math.floor(Math.random() * 224);
    document.querySelector(".dice img").classList.remove("animation");
    setTimeout(() => {
      document.querySelector(".dice img").classList.add("animation");
    }, 300);
    localStorage.setItem("id", `${random}`);

    await fetchRequest({
      url: `https://api.adviceslip.com/advice/${random}`,
      cbSuccess: (advice) => {
        document.querySelector(".containerInfo").innerHTML = null;
        document.querySelector(
          ".containerInfo"
        ).innerHTML = `    <h1>ADVICE #${advice.slip.id}</h1>
    <p>"${advice.slip.advice}"</p>`;
      },
    });
  });
}
