import { Search } from "lucide-react";
import { useState, useEffect, useRef } from 'react'

import Input from "../components/Input";
import { allWatches } from '../apis/watches'

export default function Searchbar() {
    const searchEl = useRef()
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
                <div className="absolute flex flex-col  w-full top-12 text-black shadow">
                    {search.map((item, index) => {
                        if (index < 5) {
                            return (
                                <div key={item.id} role="button" className="p-1 bg-brown hover:bg-amber-500 border-b-[1px] border-black border rounded">
                                    {item.modelName}
                                </div>
                            )
                        }
                    })}
                </div>
            }
        </div>
    )
}
