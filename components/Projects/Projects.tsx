import Image from "next/image";
import Link from "next/link";
import LinkIcon from "../../icons/link.svg"

type IProjectLink = {
    label: string;
    href: string;
}

type IProject = {
    title: string;
    description: string;
    links: IProjectLink[];
    previewImage: string;
    bgColor?: string
}

const projects = require("../../_projects/projects.json")

export const Projects = () => {
    const items: IProject[] = projects.items;
    return (
        <div>
            <div className="text-xl font-serif text-gray-400">
                Projects
            </div>
            <div className="flex flex-col space-y-8 mt-4">
                {items.map((item, index) => (
                    <Project key={index} project={item} />
                ))}
            </div>
        </div>
    )
}

const Project = (props: {project: IProject}) => {
    return (
        <div className="flex flex-row font-sans">
            <Link href={props.project.links[0].href}
            className="w-20 h-20 md:w-40 md:h-40 lg:w-64 lg:h-44 rounded-md overflow-hidden opacity-100 hover:opacity-80">
                <Image width={300} height={300} className="w-full h-full object-cover" src={props.project.previewImage} alt={props.project.title} />
            </Link>
            <div className="flex flex-1 flex-col justify-center space-y-1 ml-4 md:ml-8 ">
                <div className="text-l md:text-xl font-semibold">
                    {props.project.title}
                </div>
                <div className="text-m">
                    {props.project.description}
                </div>
                <div className="flex flex-row space-x-4">
                    {props.project.links?.map((link, index) => (
                        <Link key={index} className="flex flex-row space-x-1 items-center" href={link.href}>
                            <LinkIcon width={16} height={16} fill="#388e3c" />
                            <div className="text-l font-semibold text-green-700 no-underline hover:underline">
                                {link.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}