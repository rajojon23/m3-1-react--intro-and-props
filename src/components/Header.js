import React from 'react';

import './Header.css';

const Header = (props) => {
  console.log('header called', props);




  
  return <header>{
    props.participants.map((user) => {
      console.log('inside participants loop');

      if(user != props.currUser ) return <Avatar user = {user}/>;
       
      
    })
  }</header>;  
  

};


const Avatar = (props) => {

  
  return(
    <div className='list-participants'>
      <img className='messageImg' src={`.${props.user.avatar}`} /> 
      <div className='messageUser'>{props.user.username}</div>
    </div>

  );
};



export default Header;
