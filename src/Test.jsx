import React from 'react'

const Test = () => {
  return (
    <div className='grid gap-5 grid-cols-12'>
      <div className='h-[100px] bg-red-400 col-span-6'></div>
      <div className='h-[100px] bg-amber-400 grid-span-3 '></div>
      <div className='h-[100px] bg-green-400 grid-span-3'></div>
      
    </div>
  )
}

export default Test
