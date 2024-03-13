import { useEffect, useState } from "react";
import Icon from "../../../components/Icon";
import useProfile from "../../../hooks/useProfile";
import Title from "../../../components/Title";
import TableList from "./TableList";
import inventorySign from "../../../assets/inventory-removebg-preview.png";

export default function InventoryDetail() {
  const { getMyInventory, myShipping } = useProfile();
  const [inventory, setInventory] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [waitingData, setWaitingData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [shippingData, setShippingData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const res = await getMyInventory();
    const shipData = await myShipping();
    const data = res.data;
    setInventory(() => data); // data ใน inventory ทั้งหมด
    setPendingData(() => data.filter((e) => e.status === "PENDING")); //show pending
    setWaitingData(() => data.filter((e) => e.status === "WAITING")); //show waiting
    setActiveData(() => data.filter((e) => e.status === "AVAILABLE")); //show inventory
    setShippingData(() => shipData);
  };

  const handleTab = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    getData();
  }, [loading]);
  return (
    <>
      <div className="mx-auto w-[1200px]  min-h-screen  flex flex-col gap-10 pt-4  px-8 bg-gray-100">
        {/* <div className="text-2xl font-bold mb-4">
          WatchesPlus - My Inventory
        </div> */}
        <div className="flex justify-center">
          <img className="w-[330px] pt-2" src={inventorySign} />
        </div>
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
                    className="tab  p-4"
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
                          <Title>Waiting For Approve</Title>
                        </div>
                        <div className="flex flex-col my-8 ">
                          <TableList
                            pending={pendingData}
                            setLoading={setLoading}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex flex-col justify-center items-center my-8 gap-4">
                        <Icon name="FileSearch" size="100" />
                        <Title>No Pending Lists</Title>
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
                    className="tab p-4"
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
                          <Title>Waiting For Approve</Title>
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
                      <div className="w-full flex flex-col justify-center items-center my-8 gap-4">
                        <Icon name="FileSearch" size="100" />
                        <Title>No Waiting Lists</Title>
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
                          <Title>My Shipping Lists</Title>
                        </div>
                        <div>
                          <TableList
                            shippingData={shippingData}
                            setLoading={setLoading}
                            loading={loading}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex flex-col justify-center items-center my-8 gap-4">
                        <Icon name="FileSearch" size="100" />
                        <Title>No Shipping Lists</Title>
                      </div>
                    )}
                  </div>
                </>
              </div>
              {/* watch in inventory */}
              {activeData?.length > 0 ? (
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl font-bold mb-4">My Inventory</div>
                  </div>
                  <div>
                    <TableList
                      activeData={activeData}
                      setLoading={setLoading}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col justify-center items-center my-8">
                  <Icon name="FileSearch" size="100" />
                  <Title>No item in your Inventory</Title>
                </div>
              )}
            </>
          ) : (
            <div className="w-full flex flex-col justify-center items-center my-8">
              <Icon name="FileSearch" size="100" />
              <Title>No item in your Inventory</Title>
            </div>
          )}
        </>
      </div>
    </>
  );
}
