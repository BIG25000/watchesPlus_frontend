import React from 'react'
import Avatar from '../../../components/Avatar'
import { baht } from '../../../constants/baht'

export default function OrderList(props) {
    const { data } = props
    console.log(data)
  return (
    <div className='flex items-center h-16 px-4 gap-6 border-b-2'>
        <div className='flex items-center gap-4'>
            <Avatar src={data?.fromWallet.user.profileImage}/>
            <span>{data?.fromWallet.user.firstName}</span>
        </div>
        <div>
            purchased this watch from
        </div>
        <div className='flex items-center gap-4'>
            <Avatar  src={data?.toWallet.user.profileImage}/>
            <span>{data?.toWallet.user.firstName}</span>
        </div>
        <div className='flex items-center gap-4'>
            <span>for</span>
            <span>{baht+' '+data?.price}</span>
        </div>
    </div>
  )
}
