import CardProduct from './CardProduct'
import SelectionForm from './SelectionForm'
import { sortBrand, sortProduct } from '../../../constants/sort'
import { useState, useEffect } from 'react'
import { allWatches } from '../../../apis/watches'

export default function SearchProduct() {
    const [selectProduct, setSelectProduct] = useState(null)
    const [selectBrand, setSelectBrand] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchDate() {
            const response = await allWatches()
            setProducts(response.data.data)
        }
        fetchDate()
    }, [])

    const handleSelectSortProduct = (e) => {
        setSelectProduct(e.target.value)
    }

    const handleSelectSortBrand = (e) => {
        setSelectBrand(e.target.value)
    }
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4 mb-8">
            <div className="text-2xl font-bold">WatchesPlus - Product</div>
            <div className='flex gap-4 justify-end'>
                <SelectionForm sort={sortProduct} onChange={handleSelectSortProduct} />
                <SelectionForm sort={sortBrand} onChange={handleSelectSortBrand} />
            </div>
            <div className='flex flex-wrap gap-4'>
                {products.map(product => <CardProduct data={product} />)}
            </div>
        </div>
    )
}
