import { useLocation } from "react-router-dom";
import Button from "../components/Button";

export default function Hero() {
    const { pathname } = useLocation()

    return (
        <div className="w-full flex flex-col gap-4 p-4 bg-egg rounded">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button bg='brown'>My Active Listings</Button>
                    <Button bg='brown'>My Market History</Button>
                </div>
                <Button bg='green'>Sell an item</Button>
            </div>
            <div className="flex flex-col gap-2">
                {/* รอ map ของ user */}
                <span>My sell listing</span>
                <div className="flex justify-between items-center bg-gray-200 p-1">
                    <div className="flex">
                        <img className="w-20" src="https://plus.unsplash.com/premium_photo-1661347900107-eee09e9ae234?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className="flex flex-col">
                            <span>Model</span>
                            <span>Brand</span>
                        </div>
                    </div>
                    <div></div>
                    <div>Listed on</div>
                    <div>Price</div>
                    <Button>Remove</Button>
                </div>
                <div className="flex justify-between items-center bg-gray-200 p-1">
                    <div className="flex">
                        <img className="w-20" src="https://plus.unsplash.com/premium_photo-1661347900107-eee09e9ae234?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className="flex flex-col">
                            <span>Model</span>
                            <span>Brand</span>
                        </div>
                    </div>
                    <div></div>
                    <div>Listed on</div>
                    <div>Price</div>
                    <Button>Remove</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {/* รอ map ของ user */}
                <div>My buy orders</div>
                <div className="flex justify-between items-center bg-egg p-1">
                    <div className="flex">
                        <img className="w-20" src="https://plus.unsplash.com/premium_photo-1661347900107-eee09e9ae234?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className="flex flex-col">
                            <span>Model</span>
                            <span>Brand</span>
                        </div>
                    </div>
                    <div></div>
                    <div>Listed on</div>
                    <div>Price</div>
                    <Button>Remove</Button>
                </div>
                <div className="flex justify-between items-center bg-egg p-1">
                    <div className="flex">
                        <img className="w-20" src="https://plus.unsplash.com/premium_photo-1661347900107-eee09e9ae234?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className="flex flex-col">
                            <span>Model</span>
                            <span>Brand</span>
                        </div>
                    </div>
                    <div></div>
                    <div>Listed on</div>
                    <div>Price</div>
                    <Button>Remove</Button>
                </div>
            </div>
        </div>
    )
}
