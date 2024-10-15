import React from 'react'
import Button from './ui/BlackButton'
function Cta() {
  return (
    <div className='bg-foreground lg:px-40 md:py-20 px-5 py-5 gap-10 flex flex-col items-center'>
      <h1 className='md:text-[56px] text-[20px] font-bold leading-tight text-black text-center'>Unclock Your Free <br/>Constrution Estimate</h1>
      <Button text='Get a quote' href='get-a-quote'/>
    </div>
  )
}

export default Cta