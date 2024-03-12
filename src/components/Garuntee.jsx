import Icon from "./Icon"

export default function Garuntee() {
    return (
        <>
            <div className="bg-black text-white font-semibold flex justify-between rounded-md w-full">
                <div className="flex flex-col p-12 gap-8">
                    <div className="text-2xl font-semibold">WatchesPlus+ Buyer Protection</div>
                    <div className="flex gap-2"><Icon name='SearchCheck' color='#20830c' size='25' />Payment via the Escrow Service</div>
                    <div className="flex gap-2"><Icon name='SearchCheck' color='#20830c' size='25' />Authenticity Guarantee</div>
                    <div className="flex gap-2"><Icon name='SearchCheck' color='#20830c' size='25' />Global money-back guarantee</div>
                    <div className="flex gap-2"><Icon name='SearchCheck' color='#20830c' size='25' />Strict dealer guidelines</div>
                    <div className="flex gap-2"><Icon name='SearchCheck' color='#20830c' size='25' />Insured shipments</div>
                    <div className="flex gap-2"><Icon name='SearchCheck' color='#20830c' size='25' />WatchesPlus+'s quality & security team</div>
                </div>
                <div>
                    <img className="rounded-r-md" src="https://static.chrono24.com/cdn-cgi/image/f=auto,metadata=none,w=600/images/default/buyer-protection/buyer-protection-teaser/buyer-protection-teaser-lg.jpg" />
                </div>
            </div>
            <div className="grid grid-cols-4 justify-center items-center text-center gap-4">
                <div className="flex flex-col justify-center items-center gap-4 border rounded-lg h-64">
                    <img src="https://static.chrono24.com/images/default/illustrations/buyer-rating.svg" />
                    <div>1. Find your dream watch</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 border rounded-lg h-64">
                    <img src="https://static.chrono24.com/images/default/illustrations/love-my-watch.svg" />
                    <div>2. Pay via a secure escrow account</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 border rounded-lg h-64">
                    <img src="https://static.chrono24.com/images/default/illustrations/handshake.svg" />
                    <div>3. Receive your new watch</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 border rounded-lg h-64">
                    <img src="https://static.chrono24.com/images/default/illustrations/dealer.svg" />
                    <div>4. Only then will the seller receive payment</div>
                </div>
            </div>
        </>
    )
}
