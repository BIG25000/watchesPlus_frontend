import { Heart } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CardProduct({ data }) {
    const navigate = useNavigate()
    const [isLike, setIsLike] = useState(false)

    const handleClickLike = (e) => {
        e.stopPropagation();
        setIsLike(!isLike)
    }
    return (
        <div className="w-72 h-96 flex flex-col bg-black shadow cursor-pointer" >
            <div className="relative h-60 bg-egg flex justify-center items-center" onClick={() => navigate(`/watch/${data.id}`)}>
                <img className="h-full" src={data?.watchImage} />
                <div className="absolute right-2 top-2 " onClick={handleClickLike} role="button">
                    {isLike ? <Heart color="#ff0000" fill="red" /> : <Heart color="#ff0000" />}
                </div>
            </div>
            <div className="flex flex-col justify-between h-40 p-4 text-white">
                <div className="font-mono">{data?.brand.name}</div>
                <div className="flex flex-col gap-1">
                    <div className="flex text-2xl font-semibold">{data?.modelName}</div>
                    <div className="font-mono text-gray-500 text-xs">{data?.description}</div>
                </div>
            </div>
        </div>
    )
}
