import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props)
  return (
    <div id ='right' className='h-full w-2/3 overflow-x-auto p-6 flex flex-nowrap gap-10 bg-white' >
        {props.users.map(function(elem, idx){
          return <RightCard key= {idx} about={elem.about} id = {idx} img = {elem.img} intro = {elem.intro} tag = {elem.tag}/>
        })}                
    </div>
  )
}
 
export default RightContent
