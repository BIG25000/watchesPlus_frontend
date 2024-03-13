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

    const buyOrderBySort = orders.activity?.myBuyOrder
        .sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            }
            if (a.createdAt < b.createdAt) {
                return 1;
            }
            return 0;
        });
    const saleOrderBySort = orders.activity?.mySaleOrder
        .sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            }
            if (a.createdAt < b.createdAt) {
                return 1;
            }
            return 0;
        });
    return (
        <div className="w-[1200px] rounded-xl p-8 flex flex-col justify-between  gap-4">
            <div className="w-full">
                <span className="text-4xl font-bold">My Active Order</span>
            </div>
            <div className='text-xl font-bold  rounded-full py-4'>Buy orders</div>
            <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b bg-white">
                <div className="w-full flex font-bold p-4 bg-egg">
                    <span className="flex-1">Item</span>
                    <span className="w-32 flex items-center justify-center">Brand</span>
                    <span className="w-32 flex items-center justify-center">Price</span>
                    <span className="w-32 flex items-center justify-center">Status</span>
                    <span className="w-32 flex items-center justify-center">Time</span>
                    <span className="w-32 flex items-center justify-center">Date</span>
                    <span className="w-32 flex items-center justify-center">Cancel</span>
                </div>
                {
                    orders.activity?.myBuyOrder.length > 0
                        ? buyOrderBySort.map(el => <ActiveTransactionItem key={el.id} name={BUYORDER} el={el} />)
                        : <div className='p-4'>No result</div>
                }
            </ul>
            <div className='text-xl font-bold rounded-full p-4'>Sale orders</div>
            <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b bg-white">
                <div className="w-full flex font-bold p-4 bg-egg">
                    <span className="flex-1">Item</span>
                    <span className="w-32 flex items-center justify-center">Brand</span>
                    <span className="w-32 flex items-center justify-center">Price</span>
                    <span className="w-32 flex items-center justify-center">Status</span>
                    <span className="w-32 flex items-center justify-center">Time</span>
                    <span className="w-32 flex items-center justify-center">Date</span>
                    <span className="w-32 flex items-center justify-center">Cancel</span>
                </div>
                {
                    orders.activity?.mySaleOrder.length > 0
                        ? saleOrderBySort.map(el => <ActiveTransactionItem key={el.id} name={SALEORDER} el={el} />)
                        : <div className='p-4'>No result</div>
                }
            </ul>
        </div>
    );
}
