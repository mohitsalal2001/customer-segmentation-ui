import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-hidden p-6 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-8 w-8 flex text-lg font-bold justify-center items-center'>{props.id+1}</h2>
        <div className='text-white text-left '>
         <p className='   leading-relaxed text-white mb-10 [text-shadow:0_4px_10px_rgba(0,0,0,0.7)]' >{props.about}</p>
        
         <div className='flex justify-between'>
          <button className='bg-blue-600 rounded-full px-7 py-2'>{props.tag}</button>
          <button className='bg-blue-600 rounded-full px-4 py-2'><i class="ri-arrow-right-line"></i></button>
        </div>
        </div>
      </div>
  )
}

export default RightCardContent
