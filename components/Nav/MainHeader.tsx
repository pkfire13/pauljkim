
export const MainHeader = () => {
    return (
        <div className="flex flex-row h-full items-center justify-between font-sans">
            <a href="/" className="flex flex-row items-center">
                <div className="flex flex-1 ml-2 md:ml-4 text-sm md:text-lg font-light text-gray-500">
                    Paul Kim
                </div>
            </a>
            <div className="flex flex-row ml-4 items center space-x-3 md:space-x-8 font-semibold text-gray-800">
                <a href="/#projects" className="no-underline hover:underline">
                    projects
                </a>
                <a href="/posts" className="no-underline hover:underline">
                    posts
                </a>
            </div>
        </div>
    )
}