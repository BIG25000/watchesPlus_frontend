import CardProduct from "./CardProduct";
import Icon from "../../../components/Icon";
import useProduct from "../../../hooks/useProduct";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import useSearch from "../../../hooks/useSearch";
import IconNoHover from "../../../components/IconNoHover"
import ItemsCarousel from 'react-items-carousel';
import { useState } from "react";

export default function MostOrder() {
    const { mostOrders } = useProduct();
    const { setShowSearch } = useSearch()
    const navigate = useNavigate();
    const handleGetMoreGallery = () => {
        setShowSearch('')
        navigate("/search")
    }
    console.log(mostOrders);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 60;
    return (
        <div>
            <div className="text-xl font-semibold">Recommend</div>
            <div style={{ padding: `0 ${chevronWidth}px` }} className="w-full mx-auto">
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={15}
                    leftChevron={<div className="bg-white rounded-full"><Icon name='ArrowLeft' size='40' /></div>}
                    rightChevron={<div className="bg-white rounded-full"><Icon name='ArrowRight' size='40' /></div>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {mostOrders.slice(0, 8).map((product, index) => (
                        <div className="py-8 px-8">
                            <CardProduct data={product.watch} key={index} />
                        </div>
                    ))}
                </ItemsCarousel>
            </div>
            <div className="flex justify-center items-center">
                <Button bg='cyan' color="white" onClick={handleGetMoreGallery}>
                    More Gallery
                </Button>
            </div>
        </div>
    );
}
