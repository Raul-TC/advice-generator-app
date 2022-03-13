import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { RandomNumber } from "./helpers/RandomNumber.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML = null;
  $root.appendChild(Main());
  RandomNumber();
  Router();
}
