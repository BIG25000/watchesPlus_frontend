import { useState } from 'react'
import Button from "../../../components/Button";
import ActiveTransaction from './ActiveTransaction';
import HistoryTransaction from './HistoryTransaction';

export default function ProfileMarket() {
    const [chooseActiveOrHistory, setChooseActiveOrHistory] = useState(true)

    const handleChooseActive = () => {
        setChooseActiveOrHistory(true)
    }

    const handleChooseHistory = () => {
        setChooseActiveOrHistory(false)
    }
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-[1200px] flex px-8 gap-4">
                <Button bg='black' color='white' onClick={handleChooseActive}>Active</Button>
                <Button bg='black' color='white' onClick={handleChooseHistory}>History</Button>
            </div>
            {chooseActiveOrHistory
                ? <ActiveTransaction />
                : <HistoryTransaction />}
        </div>
    )
}
