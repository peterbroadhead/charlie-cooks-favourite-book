import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () =>{
    return (
        <div className="relative bg-sky-blue text-center text-xl font-axel pb-10">
            <div className=" z-10 w-full top-0 drop-shadow-md">
                <h2 className="p-10 text-3xl md:text-7xl m-0 hidden md:block">Charlie Cook's Favourite Book</h2>               
                <p className="p-5 text-1xl md:text-3xl ">A musical adaptation of the best-selling book by</p>
                <StaticImage src="../images/cc-author-text.png" height={100} alt="Charlie Cook's Favourite Book Author"/>
            </div>            
            <div className="hidden sm:inline-block">
                <StaticImage src="../images/wobble.png" className="!absolute z-10 bottom-0" alt="Charlie Cook's Favourite Book"/>>
                <StaticImage src="../images/cc-hero-bg-no-sky.png" className="w-200" alt="Charlie Cook's Favourite Book"/>
            </div>
            <div className="inline-block sm:hidden">
                <StaticImage src="../images/charliecook-walk.png" className="w-200" alt="Charlie Cook's Favourite Book"/>
            </div>
        </div>
    )
}

export default Hero