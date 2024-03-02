import CardProduct from "../features/product/components/CardProduct"
import Hero from "../layouts/Hero"

export default function HomePage() {
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4 mb-8">
            <Hero />
            {/* map card */}
            <div className="text-2xl font-bold">Product</div>
            <div className="flex flex-wrap justify-stretch gap-4">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    )
}
