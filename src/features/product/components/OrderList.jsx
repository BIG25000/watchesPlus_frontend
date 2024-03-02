import React from 'react'
import Avatar from '../../../components/Avatar'
import { baht } from '../../../constants/baht'

export default function OrderList() {
  return (
    <div className='flex items-center h-16 px-4 gap-6 border-b-2'>
        <div className='flex items-center gap-4'>
            <Avatar/>
            <span>Buyer1</span>
        </div>
        <div>
            purchased this watch from
        </div>
        <div className='flex items-center gap-4'>
            <Avatar/>
            <span>Seller1</span>
        </div>
        <div className='flex items-center gap-4'>
            <span>for</span>
            <span>{baht+'235.98'}</span>
        </div>
    </div>
  )
}
