import CardProduct from "../components/CardProduct"
import Hero from "../layouts/Hero"

export default function HomePage() {
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4">
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
