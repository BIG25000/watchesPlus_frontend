import CardProduct from "../features/product/components/CardProduct"
import MyMarket from "../layouts/MyMarket"
import useAuth from '../hooks/useAuth'
import SearchProduct from "../features/product/components/SearchProduct"

export default function HomePage() {
    const { authUser } = useAuth()
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4 mb-8">
            {authUser ? <MyMarket /> : <div className="bg-green-500">Video</div>}
            {/* show most population*/}
            <SearchProduct />
        </div>
    )
}
