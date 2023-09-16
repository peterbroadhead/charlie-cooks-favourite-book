import * as React from "react"
import { Link } from "gatsby"
import Hero from "../components/hero"

function isHomePage() {
  if (typeof window !== 'undefined') {
    if (window.location.pathname === '/') {
      return true
    } else {
      return false
    }
  }
}

const menuItems = [
  { path: "/about", title: "About" },
  { path: "/cast", title: "Cast" },
  { path: "/contact", title: "Contact" },
]

const Header = ({ siteTitle }) => (
  <>
    <header className="bg-sky-blue text-slate container mx-auto">
      <ul className="flex flex-wrap md:flex-nowrap"> 
        <li className="basis-full"><Link to="/"><h1 className="text-xl p-10 pl-0 font-axel hover:text-orange ease duration-700">{siteTitle}</h1></Link></li>               
        {menuItems.map((item) => (          
            <li className="flex"><Link className="text-xl pr-5 md:p-10 hover:text-orange font-serif" to={item.path}>{item.title}</Link></li>          
        ))}
        <li className="flex basis-full">
          <Link target="_blank" rel="noopener" to={"/tickets"} className="md:ml-20 bg-orange shadow-md  hover:bg-slate text-slate p-3 pl-5 pr-5 rounded-xl mt-7 h-fit">Book Now</Link>
        </li>          
      </ul>
    </header>
    {isHomePage() ? <Hero></Hero> : null}            
  </>  
)

export default Header

