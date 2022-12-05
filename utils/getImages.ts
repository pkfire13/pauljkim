import fs from "fs";
import path from "path";

const imagesDirectory = path.join(process.cwd(), 'public/images')

export const getImagesList = async (): Promise<String[]> => {
    const imagesDirContent = fs.readdirSync(imagesDirectory)
    const images= imagesDirContent.map((slug) => {
        return slug
    });

    return images 
}