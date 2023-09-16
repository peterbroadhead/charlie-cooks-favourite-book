import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div className="text-slate">
      <h1 className="text-5xl font-axel p-10 pl-0 pb-5">Contact</h1>
      <h2 className="text-light-slate italic">Drop a message and we will get back to you soon.</h2>      
      <a href="mailto:charliecook@littleangeltheatre.com">charliecook@littleangeltheatre.com</a>
     
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contact" description="Get in touch with the Charlie Cooks Favourite Book production team" />

export default ContactPage
