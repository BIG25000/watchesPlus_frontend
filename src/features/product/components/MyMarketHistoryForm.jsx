import Button from "../../../components/Button";

export default function MyMarketHistoryForm() {
    return (
        <div className="grid grid-cols-6 justify-between items-center bg-black text-white p-2">
            <div className="grid grid-cols-subgrid col-span-2">
                <div className="flex gap-2 items-center">
                    <img className="w-20" src="https://plus.unsplash.com/premium_photo-1661347900107-eee09e9ae234?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <div className="flex flex-col">
                        <span>Model</span>
                        <span>Brand</span>
                    </div>
                </div>
            </div>
            <div>Listed on</div>
            <div>Acted on</div>
            <div>With</div>
            <div>Price</div>
        </div>
    )
}
