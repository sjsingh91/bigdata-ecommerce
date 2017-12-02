var client = require('./routes/connection.js');

client.index({
    index: 'bookshopping',
    id: '401',
    type: 'books',
    body: {
        "title": "MyBookAyush",
        "Author": "ayushsood"
    }
},function(err,resp,status) {
    console.log(resp);
});