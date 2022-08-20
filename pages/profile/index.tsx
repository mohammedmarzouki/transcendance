import React from 'react'
import Bground  from '../../components/Bground'
import Acheivements  from '../../components/Acheivements'

function Profile() {

  return (
    <div>
        <Bground />
        <Acheivements ac={[true,true,true,true]} />
    </div>
  )
}

export default Profile