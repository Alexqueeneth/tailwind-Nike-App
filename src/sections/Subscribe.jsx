import React from 'react'
import Button from '../Components/Button'

const Subscribe = () => {
  return (
<section className ='max-container flex justify-between items-center max-lg:flex-col gap-10'
id='Contact-us'>
    <h3 className='text-4xl leading-[68px] lg :max-w-md font-palanquin font-bold'>
Sign Up for <span className='text-coral-red'> Updates</span> & Newsletters
    </h3>
    <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
<input type="text" 
placehilder='subscribe@nike.com'
className= 'input'/>
<div className=' flex max-sm:justify-end items-center max-sm:w-full'>
    <Button label='Sign Up' fullwidth/>
</div>
    </div>
    

</section>
  )
}

export default Subscribe