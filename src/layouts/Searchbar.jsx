import { Search } from "lucide-react";
import Input from "../components/Input";
import { useState } from "react";

export default function Searchbar() {
    const [search, setSearch] = useState('')
    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <Input
            type="text"
            placeholder="Search"
            name="search"
            value={search}
            onChange={handleChangeSearch}
        >
            <Search />
        </ Input>
    )
}
