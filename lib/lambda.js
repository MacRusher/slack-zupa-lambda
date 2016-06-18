import 'babel-polyfill';
import moment from 'moment';
import qs from 'qs';

import config from '../config.json';
import {getLastPost} from './facebook';

export default async ({body}, context, callback) => {
    // Get required params
    const {token} = qs.parse(body);
    const {slack: {token: slToken}, facebook: {pageId}} = config;

    // Verify request token
    if (token !== slToken) {
        callback(new Error('Invalid request token'));
        return;
    }

    // Fetch last post from Facebook
    const post = await getLastPost(pageId);

    // Show message if there was no post today
    if (!post || !moment().isSame(post.created_time, 'day')) {
        callback(null, {
            response_type: 'in_channel',
            text: 'Niestety nic nie wiem o dzisiejszym obiedzie :('
        });
        return;
    }

    // Parse message to more useful chunks
    const [welcomeText, ...menuText] = post.message.split('\n');
    const goodbyeText = menuText.pop();

    // Show full info
    callback(null, {
        response_type: 'in_channel',
        text: welcomeText,
        attachments: [
            {
                color: 'good',
                image_url: post.full_picture,
                text: menuText.join('\n'),
                ts: moment(post.created_time).unix(),
                footer: goodbyeText
            }
        ]
    });
};