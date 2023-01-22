function isMaxLength(maxLength, { target }) {
  return target.value.length < maxLength;
}

function isOnlyNumbers({ key }) {
  const pattern = /^[0-9]$/;
  return pattern.test(key);
}

window.isMaxLength = isMaxLength;
window.isOnlyNumbers = isOnlyNumbers;
