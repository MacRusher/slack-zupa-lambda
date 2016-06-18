import moment from 'moment';

import config from '../config.json';

export default (event, context, callback) => {
    const data = event.body;
    callback(null, 'DATA3: ' + moment() + ' | ' + JSON.stringify(config));
};