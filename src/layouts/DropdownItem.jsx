import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function DropdownItem({ key, icon, name, link }) {
    return (
        <>
            <Link to={link}>
                <div key={key} role="button" className="flex gap-2 px-3 py-2">
                    <Icon name={icon} />
                    <span>{name}</span>
                </div>
            </Link>
            <hr className="border border-brown" />
        </>
    )
}
