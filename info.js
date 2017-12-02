var client = require('./routes/connection.js');

client.cluster.health({},function(err,resp,status) {
    console.log("-- Client Health --",resp);
});

client.count({index: 'bookshopping',type: 'books'},function(err,resp,status) {
    console.log("books",resp);
});