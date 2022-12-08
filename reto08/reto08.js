function checkPart(part) {
  const { length } = part;
  for (let i = 0; i < length; i++) {
    const newStr = part.substring(0, i - 1) + part.substring(i, length);
    const reverseStr = Array.from(newStr).reverse().join('');
    if (newStr === reverseStr) {
      return true;
    }
  }
  return false;
}

module.exports = checkPart;
