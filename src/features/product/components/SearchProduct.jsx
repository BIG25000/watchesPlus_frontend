import CardProduct from './CardProduct'

export default function SearchProduct() {
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4 mb-8">
            <div className="text-2xl font-bold">Product</div>

            <CardProduct />
        </div>
    )
}
