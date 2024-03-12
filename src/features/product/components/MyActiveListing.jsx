import { useEffect } from "react"
import Pagination from "../../../components/Pagination"
import useProfile from "../../../hooks/useProfile"
import MyActiveListingForm from "./MyActiveListingForm"
import ActiveTransactionItem from "../../profile/components/ActiveTransactionItem"

const BUYORDER = 'BUYORDER'
const SALEORDER = 'SALEORDER'

export default function MyActiveListing() {
    const { orders, getAllOrder } = useProfile()

    useEffect(() => {
        getAllOrder()
    }, []);
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className='w-full flex justify-between font-light '>
                    <span className="text-xl font-semibold">My buy orders (Last 3 orders)</span>
                    <a className="hover:text-brown px-4" href="/profile">See More</a>
                </div>
                <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
                    <div className="w-full flex font-bold p-4 bg-gradient-to-t from-stone-500 to-stone-700 text-white">
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
                            ? orders.activity?.myBuyOrder.reverse().slice(0, 3).map(el => <ActiveTransactionItem key={el.id} name={BUYORDER} el={el} />)
                            : <div className="p-4 border-l border-r">No result</div>
                    }
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <div className='w-full flex justify-between font-light '>
                    <span className="text-xl font-semibold">My sell orders (Last 3 orders)</span>
                    <a className="hover:text-brown px-4" href="/profile">See More</a>
                </div>
                <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
                    <div className="w-full flex font-bold p-4 bg-gradient-to-t from-stone-500 to-stone-700 text-white">
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
                            ? orders.activity?.mySaleOrder.reverse().slice(0, 3).map(el => <ActiveTransactionItem key={el.id} name={SALEORDER} el={el} />)
                            : <div className="p-4 border-l border-r">No result</div>
                    }
                </ul>
            </div>
        </>
    )
}
