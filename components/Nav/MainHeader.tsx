import Link from "next/link"

export const MainHeader = () => {
    return (
        <div className="flex flex-row h-full items-center justify-between font-sans">
            <Link href="/" className="flex flex-row items-center">
                <div className="flex flex-1 ml-2 md:ml-4 text-sm md:text-lg font-light text-gray-500">
                    Paul Kim
                </div>
            </Link>
            <div className="flex flex-row ml-4 items center space-x-3 md:space-x-8 font-semibold text-gray-800">
                <Link href="/#projects" className="no-underline hover:underline">
                    projects
                </Link>
                <Link href="/posts" className="no-underline hover:underline">
                    posts
                </Link>
            </div>
        </div>
    )
}