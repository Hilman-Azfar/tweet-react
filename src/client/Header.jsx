import React from 'react';

import { tweets } from './tweets.js'

class Header extends React.Component {
    render() {
        let { user: {name} } = tweets[0]
        return (
            <header>
                <h1>{name}</h1>
            </header>
        );
    }
}

export default Header;