import GitHub from "../icons/github.svg"
import LinkedIn from "../icons/linkedin.svg"

const fillColor = "#262626"

export const SocialLinks = () => {
    return (
        <div className="flex flex-row space-x-4">
            <a href="https://github.com/pkfire13">
                <GitHub className="svg-link w-5 h-5" fill={fillColor} />
            </a>
            <a href="https://linkedin.com/in/paul-kim-79281b128">
                <LinkedIn className="svg-link w-5 h-5" fill={fillColor} />
            </a>
        </div>
    )
}