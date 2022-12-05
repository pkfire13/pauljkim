import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

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
                    return <div key={imagePath} className="flex justify-center items-center embla_slide">
                        <Image alt={image} className="border-2 rounded-lg border-gray-200" src={imagePath} />
                    </div>
                })}
            </div>

        </div>
    </div>
    )
}
