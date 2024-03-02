import { Heart } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CardProduct() {
    const navigate = useNavigate()
    const [isLike, setIsLike] = useState(false)

    const handleClickLike = (e) => {
        e.stopPropagation();
        setIsLike(!isLike)
    }
    return (
        <div className="w-72 h-96 flex flex-col bg-black shadow cursor-pointer" >
            <div className="relative h-60 bg-egg flex justify-center items-center"  onClick={()=>navigate('/watch/:watchId')}>
                <img className="w-48" src="https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,h=305/images/topmodels/964-t1krledkejovwzq0l6bnygy8-Original.png" />
                <div className="absolute right-2 top-2 " onClick={handleClickLike} role="button">
                    {isLike ? <Heart color="#ff0000" fill="red" /> : <Heart color="#ff0000" />}
                </div>
            </div>
            <div className="flex flex-col p-4 text-white">
                <div className=" ">User name</div>
                <div className="text-2xl font-semibold mt-8">The Rusty Robots</div>
                <div className="font-semibold">500 Baht</div>
            </div>
        </div>
    )
}
