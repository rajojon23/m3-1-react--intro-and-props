import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {

    if(props.messageType === 'sent'){
        return <SentMessage message={props.message}/>;
    }
    else{
        return <ReceivedMessage message={props.message}/>;
    }
    
}

const SentMessage = (props) => {
    return(
        <div className='sent-message'>
            <img className='messageImg' src={`.${props.message.user.avatar}`} /> 
            <div className='messageCol'>
                <div className='messageUser'>{props.message.user.username}</div>
                <div className='messageBody'>{props.message.body}</div>
            </div>
        </div>
    )

}

const  ReceivedMessage = (props) => {
    return(
        <div className='received-message'>
            <img className='messageImg' src={`.${props.message.user.avatar}`} /> 
            <div className='messageCol'>
                <div className='messageUser'>{props.message.user.username}</div>
                <div className='messageBody'>{props.message.body}</div>
            </div>
        </div>
    )

}

export default ChatMessage;