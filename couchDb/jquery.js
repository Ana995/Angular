/**
 * Created by V3790154 on 6/3/2016.
 */
(function(){

        var root = "http://localhost:5984/";

        var max_quotes=6;

        function loadPage()
    {
        var six_latest = poq.root + "quotes/_design/quotes/_view/by_year?&limit="
            + poq.max_quotes + "&descending=true&callback=?";
        $.getJSON(six_latest, poq.handleMainQuotes);
    }

//Invoked with the result of the Ajax call to load quote documents
   function  handleMainQuotes(json)
    {
        //Load up to six records, as available
        quote_count = Math.min(poq.max_quotes, json["total_rows"])
        for (var i=0; i<quote_count; i++) {
            var doc = json["rows"][i]["value"]
            var year = doc["work"]["year"].toString()
            var title = doc["work"]["title"].toString()
            var link = doc["work"]["link"].toString()

            //Create an HTML snippet from the fields of each quote document
            qblock = $("<div class='span4 featured-quote'></div>")
                .append("<h2>" + doc["author"] + "</h2>")
                .append("<p style='font-size: 80%; height: 8em;'>" + doc["text"] + "</p>")
                .append("<p>" + year + "</p>")
                .append("<p><a href='" + link + "'>" + title + "</a></p>")
                .append("<p><a class='btn' href='#'>View details &raquo;</a></p>")
            //jQuery's eq selector to find the target div corresponding to the loop index
            $('div.featured-quote:eq(' + i.toString() + ')').replaceWith(qblock);
        }
    }
});
