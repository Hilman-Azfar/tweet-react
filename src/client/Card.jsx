import React from 'react';

import UserIcon from './UserIcon'
import UserHandle from './UserHandle'
import TextContent from './TextContent'
import ImgContent from './ImgContent'
import Actions from './Actions'

class Card extends React.Component {
  render() {
    let {created_at,entities : {media = null}, text, user : {name, screen_name}} = this.props.tweet;
    return (
        <div>
            <UserIcon />
            <UserHandle name={name}
                        screen_name={screen_name}
                        created_at={created_at}/>
            <TextContent text={text}/>
            {media ? <ImgContent media={media}/>
                   : media}
            <Actions />
            <hr/>
        </div>
    );
  }
}

export default Card;