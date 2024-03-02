import React from 'react'

export default function InventoryList() {
  return (
    <div className='flex items-center h-16 pb-4 px-4 gap-6 border-b-2 justify-between'>
        <input type='radio' id="watch" name="watch_id" value="1" />
        <div>1</div>
        <img className='w-20' src='https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg'/>
        <div>Omega Speedmaster Professional Moonwatch</div>
    </div>
  )
}
