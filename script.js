$(document).ready(function() {
  getColorCode();
});


function generateId() {
  const randomValues = new Uint32Array(8);
  window.crypto.getRandomValues(randomValues);
  const hashArray = Array.from(randomValues, dec => ('0' + dec.toString(16)));
  return hashArray.join('');
}


