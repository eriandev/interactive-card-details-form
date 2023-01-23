import { $, inputCVC, inputMM, inputName, inputNum, inputYY } from "./declareRefs";

export function isValidForm() {
  const validations = [
    isNotEmpty(inputName, inputName.id),
    isValidCreditCardNumber(inputNum, inputNum.id),
    isValidYearNumber(inputYY, "input-mm-yy"),
    isValidMonthNumber(inputMM, "input-mm-yy"),
    isValidCVCNumber(inputCVC, inputCVC.id),
  ];

  return validations.every(Boolean);
}

/**
 * @param {HTMLInputElement} ref
 * @param {string} id
 */
function isNotEmpty(ref, id) {
  if (!ref.value) return showError(ref, id, "Can't be blank");
  return true;
}

/**
 * @param {HTMLInputElement} ref
 * @param {string} id
 */
function isValidNumber(ref, id) {
  if (!isNotEmpty(ref, id)) return false;
  if (isNaN(parseInt(ref.value))) return showError(ref, id, "Wrong format, numbers only");
  return true;
}

/**
 * @param {HTMLInputElement} ref
 * @param {string} id
 */
function isValidCreditCardNumber(ref, id) {
  if (!isValidNumber(ref, id)) return false;
  if (ref.value.length !== 16) return showError(ref, id, "Wrong format, need valid credit card number");
  return true;
}

/**
 * @param {HTMLInputElement} ref
 * @param {string} id
 */
function isValidMonthNumber(ref, id) {
  if (isNaN(parseInt(ref.value)) || parseInt(ref.value) > 12) return showError(ref, id, "Need valid month");
  return true;
}

/**
 * @param {HTMLInputElement} ref
 * @param {string} id
 */
function isValidYearNumber(ref, id) {
  if (isNaN(parseInt(ref.value)) || parseInt(ref.value) > 60) return showError(ref, id, "Need valid year");
  return true;
}

/**
 * @param {HTMLInputElement} ref
 * @param {string} id
 */
function isValidCVCNumber(ref, id) {
  if (!isValidNumber(ref, id)) return false;
  if (ref.value.length > 3) return showError(ref, id, "Wrong format, need valid CVC");
  return true;
}

/**
 * @param {HTMLInputElement} inputRef
 * @param {string} errorId
 * @param {string} message
 */
function showError(inputRef, errorId, message) {
  const spanError = $(`#error-${errorId}`);
  inputRef.classList.replace("border-light-grayish-violet", "border-error");
  spanError.textContent = message;
  return false;
}
