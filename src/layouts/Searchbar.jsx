import { Search } from "lucide-react";
import { useState, useEffect, useRef } from 'react'

import Input from "../components/Input";
import { allWatches } from '../apis/watches'
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
    const searchEl = useRef()
    const navigate = useNavigate()
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await allWatches()
            setFilterData(response.data.data)
        }
        fetchData();

        if (search) {
            const handleClickOutside = e => {
                if (searchEl.current && !searchEl.current.contains(e.target)) {
                    setSearch([]);
                }
            }
            document.addEventListener('mouseup', handleClickOutside);

            return () => document.removeEventListener('mouseup', handleClickOutside);
        }
    }, [])

    const handleFilter = (value) => {
        const result = filterData.filter(model => model.modelName.toLowerCase().includes(value))
        setSearch(result)
        if (value === '') {
            setSearch([])
        }
    }

    const handleItemClick = (item) => {
        setSearch([])
        navigate(`/search?keyword=${item.modelName}`)
    }
    return (
        <div className='relative' ref={searchEl}>
            <Input
                type="text"
                placeholder="Search"
                name="search"
                onChange={e => handleFilter(e.target.value)}
            >
                <Search />
            </ Input>
            {search &&
                <div className="absolute flex flex-col max-h-40 overflow-y-scroll w-full top-12 text-black shadow rounded">
                    {search.map((item, index) => (
                        <div
                            key={item.id}
                            role="button"
                            className="py-1 px-3 bg-egg hover:bg-amber-500 border-b-[1px] border-black"
                            onClick={() => handleItemClick(item)}
                        >
                            {item.modelName}
                        </div>
                    ))}
                </div>
            }
        </div >
    )
}
