import React from 'react';

class Actions extends React.Component {
  render() {
    let {retweet_count, favorite_count} = this.props;
    return (
        <div id='action'>
        <p> no premium tier</p>
        <p>retweet: {retweet_count}</p>
        <p>fav: {favorite_count}</p>
        <p>share</p>
        </div>
    );
  }
}

export default Actions;