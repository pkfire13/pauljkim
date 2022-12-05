import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export const Carousel = (props: { imagesList: string[]}) => {
    const options = {
        delay: 7000,
    }
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay(options)])

    return (
    <div className="w-full h-full">
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {props.imagesList.map((image) => {
                    const imagePath = "/images/" + image
                    return <div className="flex justify-center items-center embla_slide">
                        <img className="border-2 rounded-lg border-gray-200" src={imagePath} />
                    </div>
                })}
            </div>

        </div>
    </div>
    )
}
