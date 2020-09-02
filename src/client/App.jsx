import React from 'react';
import { hot } from 'react-hot-loader';

import Timeline from './Timeline'

class App extends React.Component {
  render() {
    return (
        <Timeline />
    );
  }
}

export default hot(module)(App);