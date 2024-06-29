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

  // SCRIPT PARA EXIBIÇÃO DE RESULTADO DOS GRUPOS


  $('#create_groups').on('click', function(){
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    var groups = [];
    
    for (var i = 0; i < letters.length; i++) {
        for (var j = i + 1; j < letters.length; j++) {
            for (var k = j + 1; k < letters.length; k++) {
                for (var l = k + 1; l < letters.length; l++) {
                    for (var m = l + 1; m < letters.length; m++) {
                        var group = letters[i] + '-' + letters[j] + '-' + letters[k] + '-' + letters[l] + '-' + letters[m];
                        groups.push(group);
                    }
                }
            }
        }
    }
    console.log(groups);
    $('#result_groups').empty();
    groups.forEach(function(group) {
        $('#result_groups').append('<div class="col col-md-4"><input class="form-control" type="text" value="' + group + '" disabled readonly></div>');
    });

    $('#result_container').removeClass('d-none');
  });
});