import CardProduct from "../features/product/components/CardProduct"
import SearchProduct from "../features/search/components/SearchProduct"
import MyMarket from "../layouts/MyMarket"
import useAuth from '../hooks/useAuth'
import VideoCarousel from "../features/slide/components/VideoSlider"


export default function HomePage() {
    const { authUser } = useAuth()
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4 mb-8">
            <VideoCarousel />
            {authUser ? <MyMarket /> : <></>}
            <SearchProduct />
        </div>
    )
}
