(function() {
  'use strict';

  fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);
}());
