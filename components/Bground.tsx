import Image  from 'next/image'

function Bground() {
  return (
    <div className='z-[-1] fixed  w-screen h-screen'>
        <Image 
        src="/sources/g_bg.jpeg"
        layout='fill'
        objectFit="cover"
        priority={true}
        />
      <div className='absolute  bg-black/40 w-screen h-screen' />
    </div>
  )
}

export default Bground

