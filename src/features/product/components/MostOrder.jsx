import CardProduct from "./CardProduct"
import Icon from "../../../components/Icon"
import useProduct from "../../../hooks/useProduct"
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function MostOrder() {
    const { mostOrders } = useProduct()
    const navigate = useNavigate()
    console.log(mostOrders);

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="text-xl font-semibold">Reccommend</div>
                <div className='flex flex-wrap gap-4'>
                    {mostOrders.length > 0
                        ? mostOrders.map(product => <CardProduct data={product.watch} key={product.id} />)
                        : (
                            <div className='w-full flex flex-col justify-center items-center'>
                                <Icon name='FileSearch' size='100' />
                                <div>No results found</div>
                                <div>Try different or more general keywords</div>
                            </div>
                        )}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Button bg='brown' onClick={() => navigate('/search')}>
                    More Gallery
                </Button>
            </div>
        </>
    )
}
