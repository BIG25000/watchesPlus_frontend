import { useEffect, useState, createContext } from 'react'
import { useNavigate } from "react-router-dom";

import { allWatches, searchWatches } from '../../../apis/watches'

export const SearchContext = createContext()

export default function SearchContextProvider({ children }) {
    const navigate = useNavigate()
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState([])
    const [querySearch, setQuerySearch] = useState(window.location.search)
    const [selectProduct, setSelectProduct] = useState(null)
    const [selectBrand, setSelectBrand] = useState(null)
    const [products, setProducts] = useState([])
    const [rerender, setRerender] = useState(false)

    async function fetchData() {
        const query = window.location.search
        console.log(query);
        setQuerySearch(query)
        console.log('***********', querySearch);

        const response = await allWatches()
        setFilterData(response.data.data)

        if (querySearch !== '') {
            console.log('have query string');
            const response = await searchWatches(querySearch)
            setProducts(response.data.data)
        } else {
            const response = await allWatches()
            setProducts(response.data.data)
        }
    }

    useEffect(() => {
        fetchData();
    }, [querySearch])

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
        setQuerySearch(window.location.search)
    }

    const handleSelectProduct = (e) => {
        setSelectProduct(e.target.value)
    }

    const handleSelectBrand = (e) => {
        setSelectBrand(e.target.value)
    }
    return (
        <SearchContext.Provider
            value={{ search, setSearch, handleFilter, handleItemClick, selectProduct, selectBrand, products, handleSelectProduct, handleSelectBrand }}
        >
            {children}
        </SearchContext.Provider>
    )
}
