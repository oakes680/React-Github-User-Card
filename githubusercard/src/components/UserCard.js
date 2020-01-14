import React from 'react'

function UserCard(props) {
    console.log('yo', props.user)
 return (
    <>
        <div>{props.user.name}</div>
        <img src={props.user.avatar_url} alt="avatar"/>
        <div>{props.user.location}</div>        
        <div>{props.user.bio}</div>                
    </> 
    

 )
}

export default UserCard 