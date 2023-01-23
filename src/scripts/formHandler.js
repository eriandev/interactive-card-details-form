import { $$, btn, completeView, mainForm } from "./declareRefs";
import { isValidForm } from "./formValidations";
import { resetCards } from "./updateCards";

let isComplete = false;

btn.addEventListener("click", () => {
  clearErrors();

  if (!isComplete && isValidForm()) {
    completeForm();
    return;
  }

  if (isComplete) initForm();
});

function initForm() {
  resetForm();
  resetCards();
  isComplete = false;
  btn.textContent = "Confirm";
  mainForm.classList.replace("hidden", "flex");
  completeView.classList.replace("grid", "hidden");
}

function completeForm() {
  isComplete = true;
  mainForm.classList.replace("flex", "hidden");
  completeView.classList.replace("hidden", "grid");
}

function clearErrors() {
  const inputs = $$("[id^=input-]");
  const errorMessages = $$("[id^=error-input]");

  inputs.forEach((input) => {
    input.classList.replace("border-error", "border-light-grayish-violet");
  });

  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
  });
}

function resetForm() {
  const inputs = $$("[id^=input-]");
  inputs.forEach((input) => {
    input.value = "";
  });
}
