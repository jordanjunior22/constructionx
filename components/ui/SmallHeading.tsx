import React from 'react'

function SmallHeading({text=''}) {
  return (
    <div className='flex gap-2 items-center'>
        <div className=' border-2 border-foreground p-1 bg-background'></div>
        <h2 className='md:text-sm text-[10px] font-bold'>{text}</h2>
    </div>
  )
}

export default SmallHeading