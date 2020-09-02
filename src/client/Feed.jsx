import React from 'react';

import Pills from './Pills'
import Tweets from './Tweets.jsx'
import TwReplies from './TwReplies'
import Media from './Media'
import Likes from './Likes'

class Feed extends React.Component {
    render() {
        let currentPill = 'tweets';
        let display = <Tweets/>
        switch (currentPill) {
            case 'tweets':
                display = <Tweets/>
                break
            case 'twReplies':
                display = <TwReplies/>
                break
            case 'media':
                display = <Media/>
                break
            case 'likes':
                display = <Likes/>
                break
        }
        return (
            <div id='feed'>
                <Pills/>
                {display}
            </div>
        );
    }
}

export default Feed;