import CardProduct from "../features/product/components/CardProduct"
import SearchProduct from "../features/search/components/SearchProduct"
import MyMarket from "../layouts/MyMarket"
import useAuth from '../hooks/useAuth'
import VideoCarousel from "../features/slide/components/VideoSlider"
import Garuntee from "../components/Garuntee"
import MostOrder from "../features/product/components/MostOrder"


export default function HomePage() {
    const { authUser } = useAuth()
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-6 py-4 px-8 bg-gray-100">
            <VideoCarousel />
            <Garuntee />
            {authUser ? <MyMarket /> : <></>}
            <MostOrder />
        </div>
    )
}
