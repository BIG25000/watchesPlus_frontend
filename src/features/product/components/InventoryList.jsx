import React from 'react'

export default function InventoryList(props) {
  const {watch , id , setInput} = props
  return (
    <div className='flex items-center h-16 pb-4 px-4 gap-6 border-b-2 justify-between'>
        <input type='radio' id="watch" name="inventoryId" value={id} onChange={(e)=>setInput((prev)=>({...prev , [e.target.name] : +e.target.value}))} />
        <div>{id}</div>
        <img className='w-20' src='https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg'/>
        <div>{watch?.modelName}</div>
    </div>
  )
}
