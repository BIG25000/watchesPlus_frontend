import { useState } from "react"
import DropdownItem from "../components/DropdownItem"
import { dropdownList } from '../constants/Navbar'

export default function DropdownNavbar() {
    const [open, setOpen] = useState(false)

    const handleToggleDropdown = () => {
        setOpen(!open)
    }

    return (
        <div className="relative">
            <div role="button" onClick={handleToggleDropdown}>
                <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1708986662906-2f3030e2dab2?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            {open && (
                <div className="border-2 border-brown bg-black absolute right-0 top-14 w-44 rounded-md shadow">
                    {dropdownList.map(el => <DropdownItem key={el.id} icon={el.icon} name={el.name} link={el.link} />)}
                </div>
            )}
        </div>
    )
}
