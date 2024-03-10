import { useEffect, useState } from "react";
import Icon from "../../../components/Icon";
import Title from "../../../components/Title";
import useProfile from "../../../hooks/useProfile";
import useSearch from "../../../hooks/useSearch";
import SelectionForm from "../../product/components/SelectionForm";
import TableList from "./TableList";
import Loading from "../../../components/Loading";
import { useWishlist } from "../../wishlist/context/WishlistContext";
import CardProduct from "../../product/components/CardProduct";

export default function InventoryDetail() {
  const { brands, handleSelectBrand, selectBrand } = useSearch();
  const { wishlist } = useWishlist()
  console.log(wishlist)
  const { getMyInventory } = useProfile();
  const [inventory, setInventory] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const getData = async () => {
    const res = await getMyInventory();
    const data = res.data;
    setInventory(() => data);
    setPendingData(() => data.filter((e) => e.status === "PENDING"));
    setActiveData(()=>data.filter((e)=>e.status === "AVAILABLE"))
  };
  console.log(inventory);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {inventory?.length > 0 ? (
        <div className="mx-auto w-[1200px]  min-h-screen  flex flex-col gap-10 py-12">
          <Title>My Inventory</Title>
          {pendingData?.length > 0 || activeData?.length > 0 ? (
            <>
              {/* container ของ inventory ที่ ติด status pending */}
              {pendingData?.length > 0 && (
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div>Waiting For Approve</div>
                    <SelectionForm items={brands} onClick={handleSelectBrand} />
                  </div>
                  <div className="flex flex-col my-8 ">
                    <TableList data={pendingData} />;
                  </div>
                </div>
              )}
              {activeData?.length > 0 && (
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div>Watch In Inventory</div>
                    <SelectionForm items={brands} onClick={handleSelectBrand} />
                    
                  </div>
                  <div className="flex">
                    {activeData.map((e)=>{
                      return <CardProduct data={e.watch} id={e.id} key={e.id}/>
                    })
                      
                    }
                    </div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <Icon name="FileSearch" size="100" />
              <div>No item in your Inventory</div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
