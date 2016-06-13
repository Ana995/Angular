/**
 * Created by V3790154 on 6/3/2016.
 */
(function(){


    // var dbroot="db/";
    dbroot:"db/";
    function loadPage()
    {

        $('#donewquote').click(function() {
            var db_link = poq.dbroot + "quotes";
            var record = {
                "type": "quote",
                "author": $("#author").val(),
                "text": $("#text").val(),
                "work": {
                    "title": $("#title").val(),
                    "link": $("#link").val(),
                    "year": parseInt($("#year").val())
                }
            };
            $.ajax({
                url : db_link,
                data : JSON.stringify(record),
                contentType : "application/json",
                type : 'POST',
                processData : false,
                dataType : "json",
                success : function(resp) {
                    alert("New document created: " + JSON.stringify(resp));
                }
            });
            return false;
        });
        $('#popup').click(function(){
            $("#newquote").slideToggle();
        });
        $("#newquote").slideToggle();
    }
});
