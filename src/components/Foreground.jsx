import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)
  const data = [
    {
        desc: "One Lorem ipsum random sit amet consectetur, adipisicing elit. Impedit, illo!",
        fileSize:"0.8mb",
        close : false,
        tag : {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "Two Lorem ipsum random sit amet consectetur, adipisicing elit. Impedit, illo!",
        fileSize:"1.4mb",
        close : false,
        tag : {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "Three Lorem ipsum random sit amet consectetur, adipisicing elit. Impedit, illo!",
        fileSize:"3.6mb",
        close : true,
        tag : {isOpen: false, tagTitle: "Upload", tagColor: "blue" },
    }
  ];  
  return (
    <div ref = {ref} className='w-full h-full fixed top-0 left-0 z-[3] flex gap-5 flex-wrap p-4'>
        {data.map((item, index)=>(
            <Card data = {item} reference = {ref}/>
        ))}
    </div>
  )
}

export default Foreground