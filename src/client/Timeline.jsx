import React from 'react';

import Header from './Header'
import Feed from './Feed'

class Timeline extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <Feed/>
        </div>
    );
  }
}

export default Timeline;