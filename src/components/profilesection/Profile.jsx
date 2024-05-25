import React from 'react'
import '../profilesection/profile.scss'

const Profile = (props) => {

    const { name} = props;
 
  return (
    <div className='mainprofile rounded'>
        <img src={name.profile_image_url} alt="" />
        <h1>{name.name}</h1>
        <p>{name.short_bio}</p>
        
    </div>
   
  )
}

export default Profile