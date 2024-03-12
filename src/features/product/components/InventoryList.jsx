import React from 'react'

export default function InventoryList(props) {
  const {watch , id , setInput , inventory} = props
  return (
    <div className='flex items-center h-20 py-4 px-4 gap-6 border-b-2 justify-between'>
        <input type='radio' id="watch" name="inventoryId" value={id} onChange={(e)=>setInput((prev)=>({...prev , [e.target.name] : +e.target.value}))} />
        
        <img className='w-16' src={watch?.watchImage}/>
        <div>{inventory?.referenceNumber}</div>
        <div>{watch?.modelName}</div>
    </div>
  )
}
