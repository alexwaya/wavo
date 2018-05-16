$(document).ready(function() {
    
    $('#menu').click(function() {
        $('#hiddenAgenda').toggle().slide(1000);
        $('#hiddenAgenda').css('width','100%');
    });
});