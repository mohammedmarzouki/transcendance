import React from 'react'
import Image  from 'next/image'
import { Menu } from '@headlessui/react'

const Acheivements:React.FC<{
    ac?:Boolean[],
}> =  ({ac=[true,false,true,true]}) => {
  return (
    <div className='relative w-screen h-screen flex justify-end right-0 xl:right-[20%]'>
      <Menu as="div" className=" w-24 order-7 ">
          <Menu.Button as="div" className='bg-gradient-to-r backdrop-blur-md hover:scale-[1.05] from-gray-500/70 mt-24 w-24 h-24 rounded-full flex justify-center items-center'>
            <Image src="/sources/trophy.svg" width="50" height="50" />
          </Menu.Button>
          <div className='flex  justify-end'>
            <Menu.Items as="div" className={"bg-gradient-to-r backdrop-blur-md focus:outline-none from-gray-500/70 rounded-3xl"}>
              {[
                [ac[0], 'Bullseye',"/sources/eye.svg"],
                [ac[1], 'Dominator',"/sources/bolt.svg"],
                [ac[2], 'Friendly',"/sources/friends.svg"],
                [ac[3], '2FA',"/sources/lock.svg"],
              ].map(([color, dsc , src]) => (
                <Menu.Item key={`${dsc}`} as="div">
                  {({ active }) => (
                  <div className={`relative w-24 h-24 ${color ? 'flex justify-center items-center' : 'hidden'} `}> 
                  <span className={`absolute right-24 bg-gray-500/70 rounded-l-3xl text-lg p-1  ${!active && 'hidden'}`} >{`${dsc}`}</span>
                  <Image  src={`${src}`} width="50" height="50" />
                  </div> 
                  )}
                </Menu.Item>
              ))}

            </Menu.Items>
          </div>
      </Menu>
    </div>

  )
}

export default Acheivements