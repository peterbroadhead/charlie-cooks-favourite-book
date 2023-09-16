import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () =>{
    return (
        <div className="relative bg-sky-blue text-center text-xl font-axel pb-10">
            <div className=" z-10 w-full top-0 drop-shadow-md">
                <h2 className="p-10 text-7xl m-0">Charlie Cook's Favourite Book</h2>               
                <p className="pb-5 text-3xl ">A musical adaptation of the best-selling book by</p>
                <StaticImage src="../images/cc-author-text.png" height={100} alt="Charlie Cook's Favourite Book Author"/>
            </div>            
            <StaticImage src="../images/wobble.png" className="!absolute z-10 bottom-0" alt="Charlie Cook's Favourite Book"/>
            <StaticImage src="../images/cc-hero-bg-no-sky.png" className="" alt="Charlie Cook's Favourite Book"/>
        </div>
    )
}

export default Hero