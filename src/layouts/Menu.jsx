import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="flex gap-10">
            <Link to='/search'>
                <div>Gallery</div>
            </Link>
            <Link to='/'>
                <div>Contact us</div>
            </Link>
        </div>
    )
}
