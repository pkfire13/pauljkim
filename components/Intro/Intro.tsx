import { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition";
import { SocialLinks } from "../SocialLinks"

const greetings = ["Hello", "Howdy", "Hola", "안녕", "您好", "やあ", "Bonjour"]

const randomIndex = (excluding? : number) => {
    let values = [...greetings];

    if(excluding){
        values = values.filter((_, i) => i !== excluding);
    }

    const value = Math.floor(Math.random() * values.length);
    return value
}

export const Intro = () => {
    const initialGreetingIndex = new Date().getDate() % greetings.length;
    const [index, setIndex] = useState(initialGreetingIndex) 

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                setIndex((index) => randomIndex(index));
            },
            3500
        )
        return () => clearTimeout(intervalId);
    }, [])

   return (
    <div className="flex flex-col my-0 md:my-12">
        <div className="flex flex-row text-3xl md:text-5xl font-serif font-bold">
            <TextTransition inline={true} springConfig={presets.slow}>
                {greetings[index % greetings.length]}
            </TextTransition>
            <div>, I'm Paul!</div>
        </div>
        <div className="text-xl my-4">
            <div>
                Welcome to my portflio website!
            </div>
            <div>
                This is a collection of blog posts and projects I have worked on.
            </div>
        </div>
        <div> 
            <SocialLinks />
        </div>
    </div>
   )
}