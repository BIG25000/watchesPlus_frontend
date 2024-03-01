import Hero from "../layouts/Hero"

export default function HomePage() {
    return (
        <div className=" mx-auto w-[1200px] min-h-56 flex flex-col gap-4 mt-4">
            <Hero />
            {/* map card */}
            <div className="bg-gray-200 min-h-96">
                card
            </div>
        </div>
    )
}
