function convertStringToNumber(value) {
  if (typeof value === 'string') {

    const cleanedValue = value.replace(/[$,]/g, '');

    if (!isNaN(parseFloat(cleanedValue))) {
      return parseFloat(cleanedValue);
    }
  }
  return value;
}

module.exports = convertStringToNumber;