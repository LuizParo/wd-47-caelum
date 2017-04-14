$(document).ready(function() {
  console.time();

  $.ajax({
    url : 'http://www.mocky.io/v2/58eeab52100000d204ebc4c2',
    method : 'GET',
    dataType : 'jsonp'
  })
  .done(function(data) {
    console.info(data);
    console.timeEnd();
  })
  .fail(function(error) {
    console.error(error);
  });
});
