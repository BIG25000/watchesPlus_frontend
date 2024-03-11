import CardProduct from '../../product/components/CardProduct'
import SelectionForm from '../../product/components/SelectionForm'
import useSearch from '../../../hooks/useSearch'
import Icon from '../../../components/Icon'


export default function SearchProduct() {
    const { showSearch, querySearch, products, brands, selectBrand, handleSelectBrand } = useSearch()

    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4 mb-8">
            <div className="text-2xl font-bold">WatchesPlus - Gallery</div>
            {showSearch || querySearch ? <p>Search keyword: '{showSearch}'</p> : ''}
            <div className='flex gap-4 justify-end'>
                <SelectionForm items={brands} onClick={handleSelectBrand} />
            </div>
            <div className='flex flex-wrap gap-4'>
                {products.length > 0
                    ? selectBrand !== null && selectBrand !== 'All brand'
                        ? (products.filter(product => product.brand.name === selectBrand).map(product => <CardProduct data={product} key={product.id} />))
                        : products.map(product => <CardProduct data={product} key={product.id} />)
                    : (
                        <div className='w-full flex flex-col justify-center items-center'>
                            <Icon name='FileSearch' size='100' />
                            <div>No results found</div>
                            <div>Try different or more general keywords</div>
                        </div>
                    )}
            </div>
        </div>
    )
}
