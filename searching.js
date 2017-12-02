var client = require('./routes/connection.js');

var searchParams = {
    index: 'bookshopping',
 //   from: (pageNum -1) * perPage,
    //size : perPage,
    type: 'books',
    body: {
        query: {
            match: { "title": "Android" }
            // fields : ["description", "title"],
            //query: userQuery,
            //fuzziness : "AUTO"


        }
    }
};

client.search(searchParams, function (error, res) {
    if (error) {
        console.log("search error: " + error)
    }
    else {
        console.log("--- Response ---");
        console.log(res);
        console.log("--- Hits ---");
        res.hits.hits.forEach(function (hit) {
            console.log(hit);
            console.log("results went to hit");
        })
    }
});