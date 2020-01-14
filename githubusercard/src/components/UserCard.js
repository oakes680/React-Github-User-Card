import React from 'react'


function UserCard(props) {
    console.log('yo', props.user)
 return (
    <>
        <div className='name'>{props.user.name}</div>
        <img src={props.user.avatar_url} alt="avatar"/>
        <div className='location'>{props.user.location}</div>        
        <div className='bio'>{props.user.bio}</div>       
                
    </> 
    

 )
}

export default UserCard 