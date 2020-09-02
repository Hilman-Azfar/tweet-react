import React from 'react';

class TextContent extends React.Component {
  render() {
    return (
        <p> {this.props.text} </p>
    );
  }
}

export default TextContent;