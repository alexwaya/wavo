$(document).ready(function() {
    
    $('#menu').click(function() {
        $('#hiddenAgenda').show();
    });

      $('#unMenu').click(function () {
          $('#hiddenAgenda').hide().slideUp(500);
      });
});