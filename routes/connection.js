var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client({
    accessKeyId: 'AKIAJNMBTNOGXKRZCUTQ',
    secretAccessKey : '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',
    service : 'es',
    log: 'trace',
    region: 'us-west-2',
    host: 'search-bookecommerce-hwglvcrguky6kzxyvfhfjw7rea.us-east-2.es.amazonaws.com'
});
module.exports = client; 