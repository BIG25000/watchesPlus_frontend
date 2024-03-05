import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function DropdownItem({ icon, name, link, onClick }) {
  return (
    <>
      <Link to={link}>
        <div role="button" className="flex gap-2 px-3 py-2" onClick={onClick}>
          <Icon name={icon} />
          <span>{name}</span>
        </div>
      </Link>
      <hr className="border border-brown" />
    </>
  );
}
