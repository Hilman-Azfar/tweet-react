import React from 'react';

import Pill from './Pill'

class Pills extends React.Component {
  render() {
    return (
        <div>
        <ul>
            <Pill name="Tweets"/>
            <Pill name="Tweets & replies"/>
            <Pill name="Media"/>
            <Pill name="Likes"/>
        </ul>
        <hr/>
        </div>
    );
  }
}

export default Pills;