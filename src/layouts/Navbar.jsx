import { Link } from 'react-router-dom'
import logoImage from '../assets/logo-watchesPlus.png'
import DropdownNavbar from './DropdownNavbar'
import Menu from './Menu'
import Searchbar from './Searchbar'

export default function Navbar() {
    return (
        <div className="navbar w-full h-20 flex justify-around items-center text-white">
            <Link to='/'>
                <div className='flex items-center'>
                    <img className='w-28' src={logoImage} />
                    <div className='font-semibold'>WatchesPlus+</div>
                </div>
            </Link>
            <Searchbar />
            <div className='flex items-center gap-12'>
                <Menu />
                <DropdownNavbar />
            </div>
        </div>
    )
}
