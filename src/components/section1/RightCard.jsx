import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-60 shrink-0 bg-pink-400 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="img" />
      <RightCardContent tag={props.tag} id = {props.id} about = {props.about}/>
    </div>
  )
}

export default RightCard