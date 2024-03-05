import CardProduct from "../features/product/components/CardProduct"
import SearchProduct from "../features/product/components/SearchProduct"
import MyMarket from "../layouts/MyMarket"
import useAuth from '../hooks/useAuth'

export default function HomePage() {
    const { authUser } = useAuth()
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4 mb-8">
            <> Video</>
            {authUser ? <MyMarket /> : <></>}
            <SearchProduct />
        </div>
    )
}
