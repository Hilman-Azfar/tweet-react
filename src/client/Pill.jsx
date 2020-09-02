import React from 'react';

class Pill extends React.Component {
  render() {
    return (
        <li> {this.props.name} </li>
    );
  }
}

export default Pill;