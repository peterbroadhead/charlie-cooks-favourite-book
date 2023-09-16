import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "/dist/output.css"
import { Link } from "gatsby"

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
            <Link to="mailto:charliecook@littleangeltheatre.com" target="_blank" className="font-axel">charliecook@littleangeltheatre.com</Link>
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
