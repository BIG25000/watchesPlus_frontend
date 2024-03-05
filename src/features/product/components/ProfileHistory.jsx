import SelectionForm from './SelectionForm'
import MyMarketHistoryForm from './MyMarketHistoryForm'
import { selectionBrand, selectionPeriod } from '../../../constants/selection'
import { useState } from 'react'

export default function ProfileHistory() {
    const [selectPeriod, setSelectPeriod] = useState(null)
    const [selectBrand, setSelectBrand] = useState(null)

    const handleSelectPeriod = (e) => {
        setSelectPeriod(e.target.value)
    }

    const handleSelectBrand = (e) => {
        setSelectBrand(e.target.value)
    }
    return (
        <div className="mx-auto w-[1200px] min-h-full flex flex-col gap-4 mt-4 mb-8">
            <h1 className="text-2xl font-bold">Trade History</h1>
            <div className="flex gap-4 justify-end">
                <SelectionForm items={selectionPeriod} onClick={handleSelectPeriod} />
                <SelectionForm items={selectionBrand} onClick={handleSelectBrand} />
            </div>
            <div className="flex flex-col gap-2">
                <MyMarketHistoryForm />
                <MyMarketHistoryForm />
            </div>
        </div>
    )
}
