import rp from 'request-promise';

import config from '../config.json';

const fbApi = async (resource = '', params = {}) => rp({
    uri: `https://graph.facebook.com/v2.6/${resource}`,
    qs: {
        access_token: config.facebook.token,
        ...params
    },
    json: true
});

export const getLastPost = async pageId => fbApi(`${pageId}/posts`, {
    limit: 1,
    fields: [
        'message',
        'full_picture',
        'created_time'
    ].join(',')
})
    .then(({data}) => data[0]);
