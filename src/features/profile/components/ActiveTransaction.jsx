import { useEffect, useState } from 'react'
import ActiveTransactionItem from './ActiveTransactionItem';
import useProfile from '../../../hooks/useProfile';

const BUYORDER = 'BUYORDER'
const SALEORDER = 'SALEORDER'

export default function ActiveTransaction() {
    const { orders, getAllOrder } = useProfile()

    useEffect(() => {
        getAllOrder()
    }, []);

    console.log(orders);

    return (
        <div className="w-[1200px] rounded-xl p-8 flex flex-col justify-between items-center gap-4">
            <div className="w-full">
                <span className="text-4xl font-bold">Active</span>
            </div>
            <div className='text-xl font-bold  rounded-full p-4'>Buy order</div>
            <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
                <div className="w-full flex font-bold p-4 bg-egg">
                    <span className="flex-1">Item</span>
                    <span className="w-32 flex items-center justify-center">Brand</span>
                    <span className="w-32 flex items-center justify-center">Price</span>
                    <span className="w-32 flex items-center justify-center">Status</span>
                    <span className="w-32 flex items-center justify-center">Time</span>
                    <span className="w-32 flex items-center justify-center">Date</span>
                    <span className="w-32 flex items-center justify-center">Cancel</span>
                </div>
                {orders.activity?.myBuyOrder.map(el => <ActiveTransactionItem key={el.id} name={BUYORDER} el={el} />)}
            </ul>
            <div className='text-xl font-bold rounded-full p-4'>Sale order</div>
            <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
                <div className="w-full flex font-bold p-4 bg-egg">
                    <span className="flex-1">Item</span>
                    <span className="w-32 flex items-center justify-center">Brand</span>
                    <span className="w-32 flex items-center justify-center">Price</span>
                    <span className="w-32 flex items-center justify-center">Status</span>
                    <span className="w-32 flex items-center justify-center">Time</span>
                    <span className="w-32 flex items-center justify-center">Date</span>
                    <span className="w-32 flex items-center justify-center">Cancel</span>
                </div>
                {orders.activity?.mySaleOrder.map(el => <ActiveTransactionItem key={el.id} name={SALEORDER} el={el} />)}
            </ul>
        </div>
    );
}
