import { useEffect } from 'react'
import HistoryTransactionItem from './HistoryTransactionItem';
import useProfile from '../../../hooks/useProfile';

export default function HistoryTransaction() {
  const { orders, getAllOrder } = useProfile()

  useEffect(() => {
    getAllOrder()
  }, []);

  console.log(orders);

  return (
    <div className="w-[1200px] rounded-xl p-8 flex flex-col justify-between items-center gap-4">
      <div className="w-full">
        <span className="text-4xl font-bold">History</span>
      </div>
      <div className='text-xl font-bold  rounded-full p-4'>Buy order</div>
      <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
        <div className="w-full flex font-bold p-4 bg-egg">
          <span className="flex-1">Item</span>
          <span className="w-36 flex items-center justify-center">Brand</span>
          <span className="w-36 flex items-center justify-center">Buy</span>
          <span className="w-36 flex items-center justify-center">Sell</span>
          <span className="w-36 flex items-center justify-center">Status</span>
          <span className="w-36 flex items-center justify-center">Date</span>
        </div>
        {orders.history.myBuyHistory.map(el => <HistoryTransactionItem key={el.id} el={el} />)}
      </ul>
      <div className='text-xl font-bold  rounded-full p-4'>Sale order</div>
      <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
        <div className="w-full flex font-bold p-4 bg-egg">
          <span className="flex-1">Item</span>
          <span className="w-36 flex items-center justify-center">Brand</span>
          <span className="w-36 flex items-center justify-center">Buy</span>
          <span className="w-36 flex items-center justify-center">Sell</span>
          <span className="w-36 flex items-center justify-center">Status</span>
          <span className="w-36 flex items-center justify-center">Date</span>
        </div>
        {orders.history.mySaleHistory.map(el => <HistoryTransactionItem key={el.id} el={el} />)}
      </ul>
    </div>
  );
}
