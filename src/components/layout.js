import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "/dist/output.css"
import { Link } from "gatsby"
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaTablet } from "@react-icons/all-files/fa/FaTablet";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="font-serif text-slate text-xl">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> 
      <div className="container">    
        <main>{children}</main>
        <footer className="mt-20 pl-0 border-t-4 border-light-teal">  
          <p>
            <ul className="flex mb-5">
              <li className="mr-2.5"><Link to="https://www.facebook.com/charliecookonstage" target="_blank"><FaFacebookSquare size={50}/></Link></li>
              <li className="mr-2.5"><Link to="https://www.instagram.com/charliecookonstage/" target="_blank"><FaInstagramSquare size={50}/></Link></li>
              <li className="mr-2.5"><Link to="https://www.tiktok.com/@charliecookonstage" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="2.3em" fill="hsl(189 62% 35%)" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg></Link></li>              
            </ul>                        
            <Link to="mailto:charliecook@littleangeltheatre.com" target="_blank" className="font-axel">charliecook@littleangeltheatre.com</Link>
            <br></br>
            <Link to="/competition" target="_blank" className="mt-5 font-axel text-sm text-slate inline-block">Competition T&Cs</Link>
            <br></br>
            <Link to="https://www.peterbroadhead.co.uk/" target="_blank" className="mt-5 font-axel text-sm text-slate inline-block">Site by Peter</Link>
          </p>          
          <p className="text-sm text-light-slate">This play is based on the original book Charlie Cook’s Favourite Book<br></br>Text © Julia Donaldson 2005<br></br>Illustrations © Axel Scheffler 2005<br></br>Published by Macmillan Children’s Books © 2005</p>    
        </footer>
      </div>
    </div>
  )
}

export default Layout
