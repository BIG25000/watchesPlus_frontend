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
  const { wishlist } = useWishlist();
  const { getMyInventory } = useProfile();
  const [inventory, setInventory] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [waitingData, setWaitingData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [shippingData, setShippingData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const res = await getMyInventory();
    const data = res.data;
    setInventory(() => data); // data ใน inventory ทั้งหมด
    setPendingData(() => data.filter((e) => e.status === "PENDING")); //show pending
    setWaitingData(() => data.filter((e) => e.status === "WAITING")); //show waiting
    setActiveData(() => data.filter((e) => e.status === "AVAILABLE")); //show inventory
  };

  const handleTab = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    getData();
  }, [loading]);
  return (
    <>
      <div className="mx-auto w-[1200px]  min-h-screen  flex flex-col gap-10 py-12">
        <Title>My Inventory</Title>
        <>
          {inventory?.length > 0 ? (
            <>
              {/* tab tab */}
              <div role="tablist" className="tabs tabs-lifted">
                {/* pendingLists */}
                <>
                  <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    style={{ width: "200px" }}
                    aria-label="Pending Lists"
                    value={0}
                    checked={activeTab === 0}
                    onChange={() => handleTab(0)}
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                    {pendingData?.length > 0 ? (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                          <div>Waiting For Approve</div>
                          <SelectionForm
                            items={brands}
                            onClick={handleSelectBrand}
                          />
                        </div>
                        <div className="flex flex-col my-8 ">
                          <TableList
                            pending={pendingData}
                            setLoading={setLoading}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex flex-col justify-center items-center">
                        <Icon name="FileSearch" size="100" />
                        <div>No Pending Lists In Your Inventory</div>
                      </div>
                    )}
                  </div>
                </>
                {/* waitingLists */}
                <>
                  <input
                    style={{ width: "200px" }}
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Waiting Lists"
                    value={1}
                    checked={activeTab === 1}
                    onChange={() => handleTab(1)}
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                    {waitingData?.length > 0 ? (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <div>Waiting Lists</div>
                          <SelectionForm
                            items={brands}
                            onClick={handleSelectBrand}
                          />
                        </div>
                        <div>
                          <TableList
                            waitingData={waitingData}
                            setLoading={setLoading}
                            loading={loading}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex flex-col justify-center items-center">
                        <Icon name="FileSearch" size="100" />
                        <div>No Shipping Lists</div>
                      </div>
                    )}
                  </div>
                </>
                {/* shippingLists */}
                <>
                  <input
                    style={{ width: "200px" }}
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Shipping Lists"
                    value={2}
                    checked={activeTab === 2}
                    onChange={() => handleTab(2)}
                  />
                  <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                  >
                    {shippingData?.length > 0 ? (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <div>Watch In Inventory</div>
                          <SelectionForm
                            items={brands}
                            onClick={handleSelectBrand}
                          />
                        </div>
                        <div className="flex">
                          {activeData.map((e) => {
                            return (
                              <CardProduct
                                data={e.watch}
                                id={e.id}
                                key={e.id}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex flex-col justify-center items-center">
                        <Icon name="FileSearch" size="100" />
                        <div>No Shipping Lists</div>
                      </div>
                    )}
                  </div>
                </>
              </div>
              {/* watch in inventory */}
              {activeData?.length > 0 ? (
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div>Watch In Inventory</div>
                    <SelectionForm items={brands} onClick={handleSelectBrand} />
                  </div>
                  <div>
                    <TableList
                      activeData={activeData}
                      setLoading={setLoading}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col justify-center items-center">
                  <Icon name="FileSearch" size="100" />
                  <div>No item in your Inventory</div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <Icon name="FileSearch" size="100" />
              <div>No item in your Inventory</div>
            </div>
          )}
        </>
      </div>
    </>
  );
}
