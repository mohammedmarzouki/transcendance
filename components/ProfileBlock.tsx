import Image from 'next/image'
import React from 'react'

function ProfileBlock() {
  return (
    <div className='w-64 h-64 rounded-3xl md:w-96 md:h-96 bg-glass flex flex-col justify-between text-center  text-white  font-lexend'>
		<div className='relative  flex items-center justify-center'>
			<Image className='rounded-full ' src="/sources/avatar.png" width={150} height={150} layout='fixed'></Image>
			<div className='absolute left-48 md:left-80 bottom-24'>
				<Image className='rounded-full ' src="/sources/Power.svg" width={50} height={50} layout='fixed'></Image>
			</div>
			<div className='absolute right-8  md:right-24 top-24 w-14 h-14'>
				<Image className='rounded-full bg-glass' src="/sources/Plus.svg" width={42} height={42} layout='fixed'></Image>
			</div>
		</div>
		<h3 className=' font-bold'>{"JOHN DOE"}</h3>
		<div className='relative table rounded-3xl h-12 md:h-20  '>
			<div className='absolute h-full w-full flex items-center justify-center'>
				<h3>{`level 3 - 50%`}</h3>
			</div>
			<div className='absolute  rounded-3xl w-[50%] h-full bg-gradient-to-r from-pink-800 -z-10 '></div>
		</div>
	</div>
  )
}

export default ProfileBlock