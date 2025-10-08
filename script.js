 //Google Sheet connect code
  var scriptURL = "https://script.google.com/macros/s/AKfycbz4oy6NfiKxWHKAitYbIJzDZbntOmLGlV8brZivQXP5sygyOYI40jPUnZxzI-DWgBtV/exec";
  var form = document.forms['google-sheet'];
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });