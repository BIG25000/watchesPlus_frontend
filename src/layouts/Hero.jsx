import { useState } from "react";
import MyActiveListing from "../features/product/components/MyActiveListing";
import MyMarketHistory from "../features/product/components/MyMarketHistory";
import Button from "../components/Button";

export default function Hero() {
    const [toggle, setToggle] = useState(false)

    const handleToggleMyActiveListingToMyMarketHistory = () => {
        setToggle(false)
    }
    const handleToggleMarketHistoryToMyActiveListing = () => {
        setToggle(true)
    }

    return (
        <div className="w-full flex flex-col gap-4 p-4 bg-egg rounded">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button bg='brown' onClick={handleToggleMyActiveListingToMyMarketHistory}>My Active Listings</Button>
                    <Button bg='brown' onClick={handleToggleMarketHistoryToMyActiveListing}>My Market History</Button>
                </div>
                <Button bg='green'>Sell an item</Button>
            </div>
            {!toggle
                ? <MyActiveListing />
                : <MyMarketHistory />
            }
        </div>
    )
}
