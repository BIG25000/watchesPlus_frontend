import CardProduct from './CardProduct'
import SelectionForm from './SelectionForm'
import { selectionBrand, selectionProduct } from '../../../constants/selection'
import { useState, useEffect } from 'react'
import { allWatches, searchWatches } from '../../../apis/watches'

export default function SearchProduct() {
    const [querySearch, setQuerySearch] = useState('')
    const [selectProduct, setSelectProduct] = useState(null)
    const [selectBrand, setSelectBrand] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchDate() {
            setQuerySearch(window.location.search)
            if (querySearch !== '') {
                const response = await searchWatches(querySearch)
                setProducts(response.data.data)
            } else {
                const response = await allWatches()
                setProducts(response.data.data)
            }
        }
        fetchDate()
        console.log('******************************');
    }, [])
    console.log(querySearch);
    // console.log('array product ==>', products);
    const handleSelectProduct = (e) => {
        setSelectProduct(e.target.value)
    }

    const handleSelectBrand = (e) => {
        setSelectBrand(e.target.value)
    }
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4 mb-8">
            <div className="text-2xl font-bold">WatchesPlus - Products</div>
            <div className='flex gap-4 justify-end'>
                <SelectionForm items={selectionProduct} onClick={handleSelectProduct} />
                <SelectionForm items={selectionBrand} onClick={handleSelectBrand} />
            </div>
            <div className='flex flex-wrap gap-4'>
                {products.map(product => <CardProduct data={product} key={product.id} />)}
            </div>
        </div>
    )
}
