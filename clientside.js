/**
 * Created by V3790154 on 5/31/2016.
 */
$('#test').click(function() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3333'
    });
});