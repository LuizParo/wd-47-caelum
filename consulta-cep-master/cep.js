$(document).ready(function() {
  var validateEntry = function(event) {
    //console.log('input', event.target.value);
    //console.log('input', this.value);
    //console.log('input', $(this).val());
    this.value = this.value.replace(/\D+/g, '');
  };

  var validateLength = function(event) {
    if(this.value.length !== 8) {
      $(this).addClass('error');
      return;
    }
    removeErrorClass();
    getAddress(this.value);
  };

  var getAddress = function(cep) {
    console.log('cep', cep);

    $.ajax({
      url : `https://viacep.com.br/ws/${cep}/json/`,
      method : 'GET',
      dataType : 'json',
      error : getAddressError,
      success : getAddressSuccess
    });
  };

  var getAddressError = function(error) {
    console.log('error', error);
  };

  var getAddressSuccess = function(data) {
    updateFields(data);
  };

  var updateFields = function(address) {
    $.each(address, function(key, value) {
      $(`#${key}`).val(value);
    });
  };

  var removeErrorClass = function(event) {
    $(this).removeClass('error');
  };

  $('#cep')
    .on('input', validateEntry)
    .on('focusin', removeErrorClass)
    .on('focusout', validateLength);
});
