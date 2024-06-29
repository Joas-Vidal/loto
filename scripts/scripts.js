$(document).ready(function(){
  // GRUPO A
  $('#group_a').on('input', function(){
      var inputVal = $(this).val();
      var numbers = inputVal.split('-').filter(function(value) {
          return $.isNumeric(value);
      });
      var count = numbers.length;
      $('#count_group_a').text('Total de números: ' + count + '/20');
  });

  $('#group_a').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });

  //GRUPO B

  $('#group_b').on('input', function(){
    var inputVal = $(this).val();
    var numbers = inputVal.split('-').filter(function(value) {
        return $.isNumeric(value);
    });
    var count = numbers.length;
    $('#count_group_b').text('Total de números: ' + count + '/20');
  });

  $('#group_b').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });

  // GRUPO C

  $('#group_c').on('input', function(){
    var inputVal = $(this).val();
    var numbers = inputVal.split('-').filter(function(value) {
        return $.isNumeric(value);
    });
    var count = numbers.length;
    $('#count_group_c').text('Total de números: ' + count + '/20');
  });

  $('#group_c').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });

  // GRUPO D

  $('#group_d').on('input', function(){
    var inputVal = $(this).val();
    var numbers = inputVal.split('-').filter(function(value) {
        return $.isNumeric(value);
    });
    var count = numbers.length;
    $('#count_group_d').text('Total de números: ' + count + '/20');
  });

  $('#group_d').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });

  //GRUPO F

  $('#group_f').on('input', function(){
    var inputVal = $(this).val();
    var numbers = inputVal.split('-').filter(function(value) {
        return $.isNumeric(value);
    });
    var count = numbers.length;
    $('#count_group_f').text('Total de números: ' + count + '/20');
  });

  $('#group_f').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });

  //GRUPO G

  $('#group_g').on('input', function(){
    var inputVal = $(this).val();
    var numbers = inputVal.split('-').filter(function(value) {
        return $.isNumeric(value);
    });
    var count = numbers.length;
    $('#count_group_g').text('Total de números: ' + count + '/20');
  });

  $('#group_g').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });

  // GRUPO H

  $('#group_h').on('input', function(){
    var inputVal = $(this).val();
    var numbers = inputVal.split('-').filter(function(value) {
        return $.isNumeric(value);
    });
    var count = numbers.length;
    $('#count_group_h').text('Total de números: ' + count + '/20');
  });

  $('#group_h').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });

  //GRUPO I

  $('#group_i').on('input', function(){
    var inputVal = $(this).val();
    var numbers = inputVal.split('-').filter(function(value) {
        return $.isNumeric(value);
    });
    var count = numbers.length;
    $('#count_group_i').text('Total de números: ' + count + '/20');
  });

  $('#group_i').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });

  // GRUPO J 

  $('#group_j').on('input', function(){
    var inputVal = $(this).val();
    var numbers = inputVal.split('-').filter(function(value) {
        return $.isNumeric(value);
    });
    var count = numbers.length;
    $('#count_group_j').text('Total de números: ' + count + '/20');
  });

  $('#group_j').on('keydown', function(e) {
      if (e.key === ' ') {
          e.preventDefault();
          var inputVal = $(this).val();
          if (inputVal.length > 0 && inputVal[inputVal.length - 1] !== '-') {
              $(this).val(inputVal + '-');
          }
      }
  });
});