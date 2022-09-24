import React from 'react'
import Image  from 'next/image'
import Link from 'next/link'

export const Return = () => {
  return (
      <div className="absolute  xl:left-[20%]">
        <Link href="/home">
          <div className='bg-gradient-to-r backdrop-blur-md hover:scale-[1.05] from-gray-500/70 mt-14 w-14 h-14 xl:mt-24 xl:w-24 xl:h-24 rounded-full flex justify-center items-center'>
            <div className='relative w-10 h-10  xl:w-12 xl:h-12'>
              <Image src="/sources/return.svg" layout='fill' />
            </div>
          </div>
        </Link>
      </div>
  )
}
