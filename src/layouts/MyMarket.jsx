import { useState } from "react";
import MyActiveListing from "../features/product/components/MyActiveListing";
import MyMarketHistory from "../features/product/components/MyMarketHistory";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function MyMarket() {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)

    const handleToggleMyActiveListingToMyMarketHistory = () => {
        setToggle(false)
    }
    const handleToggleMarketHistoryToMyActiveListing = () => {
        setToggle(true)
    }

    return (
        <div className="w-full flex flex-col gap-6 rounded">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button bg='brown' onClick={handleToggleMyActiveListingToMyMarketHistory}>My Active Listings</Button>
                    <Button bg='brown' onClick={handleToggleMarketHistoryToMyActiveListing}>My Market History</Button>
                    <Button bg='green' onClick={() => navigate('/profile/inventory')}>My Inventory</Button>
                </div>
            </div>
            {!toggle
                ? <MyActiveListing />
                : <MyMarketHistory />
            }
        </div>
    )
}
