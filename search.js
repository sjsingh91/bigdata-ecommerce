var Elasticsearch = require('aws-es');
elasticsearch = new Elasticsearch({
    accessKeyId: 'AKIAJNMBTNOGXKRZCUTQ',
    secretAccessKey : '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',
    service : 'es',
    log: 'trace',
    region: 'us-west-2',
    host: 'search-bookecommerce-hwglvcrguky6kzxyvfhfjw7rea.us-east-2.es.amazonaws.com'
});

elasticsearch.index({
    index: 'blog',
    type: 'posts',
    id: '1',
    body: {
        title: 'manually set id',
        shares: 10
    }
}, function(err, data) {
    console.log('json reply received');
});

elasticsearch.index({
    index: 'blog',
    type: 'posts',
    body: {
        title: 'auto set id',
        shares: 5
    }
}, function(err, data) {
    console.log('json reply received');
});

elasticsearch.get({
    index: 'blog',
    type: 'posts',
    id: '1'
}, function(err, data) {
    console.log('json reply received');
});