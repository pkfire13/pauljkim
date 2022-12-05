import { SocialLinks } from "./SocialLinks"


export const Footer = () => {
    return (
        <div className="flex flex-row h-full items-center justify-center">
            <div className="text-xs text-gray-400 mr-8">
                @ Paul Kim 2022
            </div>
            <SocialLinks />
        </div>
    )
}