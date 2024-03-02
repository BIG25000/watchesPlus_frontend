import MyActiveListingForm from "./MyActiveListingForm"
import MyMarketHistoryForm from "./MyMarketHistoryForm"

export default function MyActiveListing() {
    return (
        <>
            <div className="flex flex-col gap-2">
                {/* รอ map ของ user */}
                <span>My sell listing</span>
                <MyActiveListingForm />
                <MyActiveListingForm />

            </div>
            <div className="flex flex-col gap-2">
                {/* รอ map ของ user */}
                <div>My buy orders</div>
                <MyActiveListingForm />
                <MyActiveListingForm />
            </div>
        </>
    )
}
