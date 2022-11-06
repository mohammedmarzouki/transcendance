import React from 'react'
import Bground  from '../../components/Bground'
import Acheivements  from '../../components/Acheivements'
import ProfileBlock from '../../components/ProfileBlock'
import {Return}  from '../../components/Return'

function Profile() {

  return (
    <div className='flex justify-between max-w-7xl mx-auto pt-24  '>
      <Return />
      <ProfileBlock />
      <Acheivements ac={[true,true,true,true]} />
    </div>
  )
}

export default Profile