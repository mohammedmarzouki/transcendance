import React from 'react'
import Image  from 'next/image'
import { Menu ,Transition } from '@headlessui/react'

const Acheivements:React.FC<{
    ac?:Boolean[],
}> =  ({ac=[false,false,false,false]}) => {
  return (
    <div className=' flex justify-end xl:mr-[20%]'>
      <Menu as="div" className=" w-24 ">
          <Menu.Button as="div" className='bg-gradient-to-r backdrop-blur-md  hover:scale-[1.05] from-gray-500/70  mt-24 w-24 h-24 rounded-full flex justify-center items-center'>
            <Image src="/sources/trophy.svg" width="50" height="50" />
          </Menu.Button>
          <div className='flex  justify-end'>
            <Transition
            as="div"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items as="div" className={"bg-gradient-to-r backdrop-blur-md focus:outline-none from-gray-500/70 rounded-3xl"}>
              {[
                [ac[0], 'Bullseye',"/sources/eye.svg",'win 3 matches straight'],
                [ac[1], 'Dominator',"/sources/bolt.svg", 'score 7 - 0 in a match'],
                [ac[2], 'Friendly',"/sources/friends.svg", 'add 3 friends'],
                [ac[3], '2FA',"/sources/lock.svg" , 'enable Two Fac Auth'],
              ].map(([color, dsc , src, dsc2]) => (
                <Menu.Item key={`${dsc}`} as="div" disabled={!color} >
                  {({ active  }) => (
                    <div className={` w-24 h-24 ${color ? 'flex justify-center items-center' : 'hidden'} `}> 
                  <p className={`absolute m-auto h-20 w-48  right-24 bg-gray-500/70 truncate rounded-l-3xl text-center text-lg p-1  ${!active && 'hidden'}`} >
                    <span className='font-bold'>{`${dsc}`}</span>
                    <br />
                    <span>{`${dsc2}`}</span>
                  </p>
                  <Image  src={`${src}`} width="50" height="50" />
                  </div> 
                  )}
                </Menu.Item>
              ))}

            </Menu.Items>
            </Transition>
          </div>
      </Menu>
    </div>
  )
}

export default Acheivements