//utils/formatNumber.js
export function formatNumber(value) {
  if (!value) return '';
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function parseNumber(value) {
  return value.replace(/,/g, '');
}

export function isNumeric(value) {
  return /^\d*\.?\d*$/.test(value);
}

export function removeLeadingZeros(value) {
  return value.replace(/^0+(?!$)/, '');
}
