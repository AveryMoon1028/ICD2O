const button = document.getElementById('searchButton');
const input = document.getElementById('userInput');

button.addEventListener('click', function () {
  const q = (input.value || '').trim();
  if (q) {
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
    window.open(url, '_blank');
  }
});
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function () {
  input.value = '';
});
