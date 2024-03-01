import { Heart } from "lucide-react"
import { useState } from "react"

export default function CardProduct() {
    const [isLike, setIsLike] = useState(false)

    const handleClickLike = () => {
        setIsLike(!isLike)
    }
    return (
        <div className="w-72 h-96 flex flex-col bg-black shadow">
            <div className="relative h-60 bg-gray-200">
                <img src="" />
                <div className="absolute right-2 top-2" onClick={handleClickLike} role="button">
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
