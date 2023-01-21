import {
  cardCVC,
  cardExpMM,
  cardExYY,
  cardHolder,
  cardNumber,
  inputCVC,
  inputMM,
  inputName,
  inputNum,
  inputYY,
} from "./declareRefs";

inputNum.addEventListener("input", ({ target }) => {
  cardNumber.textContent = getFormatted(target.value);
});
inputName.addEventListener("input", ({ target }) => {
  cardHolder.textContent = target.value;
});
inputMM.addEventListener("input", ({ target }) => {
  cardExpMM.textContent = target.value;
});
inputYY.addEventListener("input", ({ target }) => {
  cardExYY.textContent = target.value;
});
inputCVC.addEventListener("input", ({ target }) => {
  cardCVC.textContent = target.value;
});

function getFormatted(text) {
  return text
    .replace(/[^0-9]/g, "")
    .substr(0, 16)
    .split("")
    .reduce((str, l, i) => str + (!i || i % 4 ? "" : " ") + l, "");
}
