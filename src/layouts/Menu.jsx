import { Link } from "react-router-dom";
import useSearch from "../hooks/useSearch";

export default function Menu() {
    const { handleResetQuerySearch } = useSearch()
    return (
        <div className="flex gap-10">
            <Link to='/search'>
                <div onClick={() => handleResetQuerySearch()}>Gallery</div>
            </Link>
            <Link to='/'>
                <div>Contact us</div>
            </Link>
        </div>
    )
}
