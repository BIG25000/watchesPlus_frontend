import SelectionForm from './SelectionForm'
import MyMarketHistoryForm from './MyMarketHistoryForm'

export default function ProfileHistory() {
    return (
        <div className="mx-auto w-[1200px] min-h-full flex flex-col gap-4 mt-4 mb-8">
            <h1 className="text-2xl font-bold">Trade History</h1>
            <div className="flex gap-4 justify-end">
                <SelectionForm name='Last 7 days,Last 30 days,Last 12 months,All' />
                <SelectionForm name='All Brand,Rolex,Omega,Seiko,Cartier,Hublot,Casio' />
            </div>
            <div className="flex flex-col gap-2">
                <MyMarketHistoryForm />
                <MyMarketHistoryForm />
            </div>
        </div>
    )
}
