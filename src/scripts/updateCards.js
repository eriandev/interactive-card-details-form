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

export function resetCards() {
  cardNumber.textContent = "0000 0000 0000 0000";
  cardHolder.textContent = "Jane Appleseed";
  cardExpMM.textContent = "00";
  cardExYY.textContent = "00";
  cardCVC.textContent = "000";
}

inputNum?.addEventListener("input", ({ target }) => {
  cardNumber.textContent = getFormatted(target.value);
});
inputName?.addEventListener("input", ({ target }) => {
  cardHolder.textContent = target.value ? target.value : "Jane Appleseed";
});
inputMM?.addEventListener("input", ({ target }) => {
  cardExpMM.textContent = target.value ? target.value : "00";
});
inputYY?.addEventListener("input", ({ target }) => {
  cardExYY.textContent = target.value ? target.value : "00";
});
inputCVC?.addEventListener("input", ({ target }) => {
  cardCVC.textContent = target.value ? target.value : "000";
});

function getFormatted(text) {
  return text
    ? text
        .replace(/[^0-9]/g, "")
        .substr(0, 16)
        .split("")
        .reduce((str, l, i) => str + (!i || i % 4 ? "" : " ") + l, "")
    : "0000 0000 0000 0000";
}
