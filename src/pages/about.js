import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="text-slate">
      <h1 className="text-5xl font-axel p-10 pl-0 pb-5">About the Show</h1>
      <h2 className="text-light-slate italic">Learn more about the performance </h2>    
      <p className="font-axel">Aimed at ages 3-8</p>  
      <p>Come and delve into a range of books with Charlie Cook, brought to life with puppetry and enchanting songs, and perhaps you will be able to help his sister discover the wonderful world inside a book…</p>
      <div className="bg-light-teal p-5 mt-20 rounded-xl">
        <h3 className="m-0">A Little Angel Theatre, Lowry and Rose Theatre co-production</h3>
        <h3 className="mt-5">Credits</h3>
        <ul>
          <li>Adapted by Barb Jungr and Samantha Lane</li>
          <li>Director – Samantha Lane</li>
          <li>Composer/Lyrics – Barb Jungr</li>
          <li>Set/Costume – Ellie Mills</li>
          <li>Puppets – Maia Kirkman-Richards</li>
          <li>Lighting – Sherry Coenen</li>
          <li>Stage managed by TBC</li>
          <li>Performed by TBC</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="About" description="Learn more about the theatre production of Charlie Cooks Favourite Book" />

export default AboutPage
