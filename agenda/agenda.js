;(function() {
  'use strict';

  var ui = {
    fields : document.querySelectorAll('form input'),
    button : document.querySelector('form button'),
    table : document.querySelector('table tbody')
  };

  var validateFields = function(event) {
    event.preventDefault();
    console.log('call validateFields');

    var errors = 0;
    var data = {};

    ui.fields.forEach(field => {
      if(field.value.trim().length === 0) {
        field.classList.add('error');
        ++errors;
      } else {
        field.classList.remove(`error`);
        data[field.id] = field.value;
      }
    });

    if(errors !== 0) {
      document.querySelector('.error').focus();
      return;
    }

    storeData(data);
  };

  var storeData = function(data) {
    console.log('call storeData', data);

    var contatos = [];

    if(localStorage.agenda) {
      contatos = JSON.parse(localStorage.agenda)
    }

    contatos.push(data);
    localStorage.agenda = JSON.stringify(contatos);

    generateTable();
  };

  var generateTable = function(event) {
    console.log('call generateTable');

    var list = localStorage.agenda ? JSON.parse(localStorage.agenda) : [];

    var rows = list.map((contact, index) => {
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${contact.name}</td>
          <td>${contact.email}</td>
          <td>${contact.tel}</td>
          <td><a href="#" data-action="delete" data-id="${index}">Excluir</a></td>
        </tr>
      `;
    });

    ui.table.innerHTML = rows.join('');
    clearFields();
  };

  var deleteItem = function(event) {
    event.preventDefault();
    console.log('call deleteItem');

    var data = event.target.dataset;
    if(data && data.action === 'delete') {
      var list = JSON.parse(localStorage.agenda);
      list.splice(data.id, 1);
      localStorage.agenda = JSON.stringify(list);

      generateTable();
    }
  };

  var clearFields = function() {
    ui.fields.forEach(field => field.value = '');
  };

  var init = function() {
    generateTable();

    ui.button.addEventListener('click', validateFields);
    ui.table.addEventListener('click', deleteItem);
  }();
}());
