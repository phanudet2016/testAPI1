var request = require('request');

var options = {
    url: 'https://idp.frdpcloud.com/openam/json/realms/root/authenticate',
    // auth: {
    //     'user': 'keyid',
    //     'pass': 'keysecret'
    // }
    method: 'POST',
    headers: {
        'X-OpenAM-Username': 'amadmin',
        'X-OpenAM-Password': 'Frdp-2010',
        'Accept-API-Version': 'resource=2.0, protocol=1.0',
        'Content-Type': 'application/json'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);