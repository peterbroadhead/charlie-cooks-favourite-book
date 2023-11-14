import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import competitionVideo from "../videos/competition.mp4"

const youngAuthorCompetitionPage = () => (
  <Layout>
    <div className="text-slate">
      <h1 className="text-5xl font-axel p-10 pl-0 pb-5">YOUNG AUTHORS COMPETITION</h1>
      <h2 className="text-light-slate italic">The Charlie Cook production is all about the joy of reading, sharing stories and celebrating creativity.</h2>        
      <p>
        <video style={{height:"600px"}} className="float-left inline-block shadow-md rounded-xl mr-5 " controls>
          <source src={competitionVideo} type="video/mp4" />
        </video>
        We will be running a creative writing competition through the run of the tour where young authors can submit short stories, taking inspiration from exerts of the book. <br></br><br></br>
        We will be celebrating entries throughout the year, with winners receiving a book token and selected stories will be published in an anthology at the end of the year.<br></br><br></br>
        From November 2023, we will be releasing a video each month from characters in the show reading exerts from the book as inspirational and giving more details about the competition and how to enter. These will be released on the Charlie Cook website and social media sites.</p>
      <h3><b>The Rules:</b></h3>
      <ul>
        <li>The competition is open to children between the ages of 4 and 15</li>
        <li>All entries must be submitted by an adult capable of giving permission on behalf of the child – parent/guardian or the child’s teacher who has obtained the parent or guardian’s permission.</li>
        <li>The story must be entirely the work of the child</li>
        <li>Entries can be up to 1,000 words</li>
        <li>There will be several closing dates for the competition throughout the year.  </li>
      </ul>
      <h3>How to Enter:</h3>
      <p>Please email your entry as a PDF or Word document or you can post your entry to: <br></br><br></br>
      <b>Little Angel Theatre<br></br> 14 Dagmar Passage<br></br> London<br></br>N1 2DN</b> <br></br><br></br>or email <a href="mailto:CharlieCook@littleangeltheatre.com">CharlieCook@littleangeltheatre.com</a> along with your name, full postal address and email.</p>    
      <p>For teachers submitting multiple entries, please ensure parents/guardians have given their permission and where that’s not possible please encourage individual online entry.</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Competition" description="Competition T&Cs for Charlie Cooks Favourite Book" />

export default youngAuthorCompetitionPage
