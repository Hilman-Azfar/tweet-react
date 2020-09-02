import React from 'react';

class UserHandle extends React.Component {
  render() {
    let {name, screen_name, created_at} = this.props;
    created_at = new Date(created_at)
    let time = Date.now() - Date.parse(created_at);
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


    if (time > 31557600000) {
        // more than one year
        time = created_at.toDatestring();
    } else if (time > 86400000) {
        // more than 24 hours
        time = `${month[created_at.getMonth()]} ${created_at.getDate()}`;
    } else {
        time = `${created_at.getHours()}h`;
    }
    return (
        <h3> {name} @{screen_name} {time}</h3>
    );
  }
}

export default UserHandle;