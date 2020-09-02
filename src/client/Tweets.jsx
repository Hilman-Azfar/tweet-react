import React from 'react';

import Card from './Card'
import { tweets } from './tweets.js'

class Tweets extends React.Component {
    render() {
        let allCards = tweets.map((tweet, index) => {
            return <Card key={index}
                         tweet={tweet}/>
        })
        return (
            <div>
                { allCards }
            </div>
        );
    }
}

export default Tweets;