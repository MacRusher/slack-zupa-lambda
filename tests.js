var lambda = require('./dist/lambda').default;
var config = require('./config.json');
var log = console.log.bind(console, 'Lambda result:');

lambda({
    body: [
        'token=' + config.slack.token,
        'team_id=T0001',
        'team_domain=example',
        'channel_id=C2147483705',
        'channel_name=test',
        'user_id=U2147483697',
        'user_name=Steve',
        'command=/zupa',
        'text=',
        'response_url=https://hooks.slack.com/commands/1234/5678'
    ].join('&')
}, {}, log);