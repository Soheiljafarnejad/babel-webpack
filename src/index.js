import "./css/index.css";
import "./css/app.css";

const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".count");
let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.target.classList;
    if (style.contains("decrement")) {
      count--;
    } else if (style.contains("increment")) {
      count++;
    }
    if (style.contains("reset")) {
      count = 0;
    }
    value.innerText = count;
  });
});
