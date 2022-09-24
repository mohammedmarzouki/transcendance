import React from 'react'
import Bground  from '../../components/Bground'
import Acheivements  from '../../components/Acheivements'
import ProfileBlock from '../../components/ProfileBlock'
import {Return}  from '../../components/Return'

function Profile() {

  return (
    <div className='absolute h-screen w-screen overflow-hidden'>
      <Bground />
      <Return />
      {/* <ProfileBlock /> */}
      <Acheivements ac={[false,true,false,true]} />
    </div>
  )
}

export default Profile