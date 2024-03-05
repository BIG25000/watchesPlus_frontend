import { useRef, useEffect } from 'react'
import { Search } from "lucide-react";

import useSearch from '../hooks/useSearch'
import Input from "../components/Input";

export default function Searchbar() {
    const searchEl = useRef()
    const { searchElement, search, setSearch, handleFilter, handleItemClick } = useSearch()

    useEffect(() => {
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

    return (
        <div className='relative' ref={searchEl}>
            <Input
                type="text"
                placeholder="Search"
                name="search"
                value={searchElement}
                onChange={e => handleFilter(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? console.log('enter ja') : ''}
            >
                <Search />
            </ Input>
            {
                search &&
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
