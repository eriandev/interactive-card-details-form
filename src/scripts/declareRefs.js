/**
 * @param {string} selector
 * @return {HTMLElement | null}
 */
export const $ = (selector) => document.querySelector(selector);

/**
 * @param {string} selector
 * @return {NodeListOf<Element>}
 */
export const $$ = (selector) => document.querySelectorAll(selector);

/** @type {HTMLSpanElement} */
export const cardNumber = $("#card-number");

/** @type {HTMLSpanElement} */
export const cardHolder = $("#cardholder-name");

/** @type {HTMLSpanElement} */
export const cardExpMM = $("#exp-mm-date");

/** @type {HTMLSpanElement} */
export const cardExYY = $("#exp-yy-date");

/** @type {HTMLDivElement} */
export const cardCVC = $("#cvc");

/** @type {HTMLFormElement} */
export const mainForm = $("form");

/** @type {HTMLInputElement} */
export const inputName = $("#input-name");

/** @type {HTMLInputElement} */
export const inputNum = $("#input-num");

/** @type {HTMLInputElement} */
export const inputMM = $("#input-mm");

/** @type {HTMLInputElement} */
export const inputYY = $("#input-yy");

/** @type {HTMLInputElement} */
export const inputCVC = $("#input-cvc");

/** @type {HTMLButtonElement} */
export const btn = $("#btn-action");

/** @type {HTMLDivElement} */
export const completeView = $("#complete-view");
