import { useEffect } from "react";
import Pagination from "../../../components/Pagination"
import MyMarketHistoryForm from "./MyMarketHistoryForm"
import useProfile from "../../../hooks/useProfile";
import HistoryTransactionItem from "../../profile/components/HistoryTransactionItem";

export default function MyMarketHistory() {
    const { orders, getAllOrder } = useProfile()

    useEffect(() => {
        getAllOrder()
    }, []);

    const ordersBySort = orders.history.myBuyHistory
        .sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            }
            if (a.createdAt < b.createdAt) {
                return 1;
            }
            return 0;
        });

    const saleBySort = orders.history.mySaleHistory
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
        <>
            <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold">Buy orders (Last 3 orders)</span>
                <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
                    <div className="w-full flex font-bold p-4 bg-gradient-to-t from-stone-500 to-stone-700 text-white">
                        <span className="flex-1">Item</span>
                        <span className="w-36 flex items-center justify-center">Brand</span>
                        <span className="w-36 flex items-center justify-center">Buy</span>
                        <span className="w-36 flex items-center justify-center">Sell</span>
                        <span className="w-36 flex items-center justify-center">Status</span>
                        <span className="w-36 flex items-center justify-center">Date</span>
                    </div>
                    {
                        orders.history.myBuyHistory.length > 0
                            ? ordersBySort.slice(0, 3).map(el => <HistoryTransactionItem key={el.id} el={el} />)
                            : <div className="p-4 border-l border-r">No result</div>
                    }
                </ul>
                <div className='flex justify-end font-light '>
                    <a className="hover:text-brown px-4" href="/profile">See More</a>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold">Sale orders (Last 3 orders)</span>
                <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
                    <div className="w-full flex font-bold p-4 bg-gradient-to-t from-stone-500 to-stone-700 text-white">
                        <span className="flex-1">Item</span>
                        <span className="w-36 flex items-center justify-center">Brand</span>
                        <span className="w-36 flex items-center justify-center">Buy</span>
                        <span className="w-36 flex items-center justify-center">Sell</span>
                        <span className="w-36 flex items-center justify-center">Status</span>
                        <span className="w-36 flex items-center justify-center">Date</span>
                    </div>
                    {
                        orders.history.mySaleHistory.length > 0
                            ? saleBySort.slice(0, 3).map(el => <HistoryTransactionItem key={el.id} el={el} />)
                            : <div className="p-4 border-l border-r">No result</div>
                    }
                </ul>
                <div className='flex justify-end font-light '>
                    <a className="hover:text-brown px-4" href="/profile">See More</a>
                </div>
            </div>
            {/* <Pagination /> */}
        </>
    )
}
