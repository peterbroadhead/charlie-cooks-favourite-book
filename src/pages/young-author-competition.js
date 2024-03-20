import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import competitionVideo from "../videos/competition.mp4"

const youngAuthorCompetitionPage = () => (
  
  <Layout>
    <div className="text-slate">
      <h1 className="text-5xl font-axel p-10 pl-0 pb-5">YOUNG AUTHORS COMPETITION</h1>
      <h2 className="text-light-slate italic">The Charlie Cook production is all about the joy of reading, sharing stories and celebrating creativity.</h2>        
      <h3>Calling all young authors. </h3>
      <p>Each month we will be running a creative writing competition asking writers to send short stories inspired by the CHARLIE COOK'S FAVOURITE BOOK stories.<br></br><br></br>
      Below you will see this month's story. Each month we will announce winners who will receive a book token and will have their story published at the end of the year. <br></br><br></br>
      Rules and entry details can be found at the bottom of this page. <br></br><br></br>
      Please email your entry as a PDF or Word document or you can post your entry to: Little Angel Theatre, 14 Dagmar Passage, London N1 2DN or email <a href="mailto:CharlieCook@littleangeltheatre.com">CharlieCook@littleangeltheatre.com</a> along with your name, full postal address and email.</p>
  
      <section className="mb-10">

        <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
            <h3 className="m-0">The Story of The Girl and the Flying Saucer</h3>
            <p>Coming soon...</p>            
            <iframe width="560" height="315" src="https://youtu.be/WTqyumkaJjs?si=7HjWa2zI3r9UAZzp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
            <h3 className="m-0">Enter our young author’s competition</h3>
            <p>We’ve got another chance for you to enter our young author’s competition. This month, we’re looking for stories inspired by this tale of a large oak tree filled with different kinds of birds. Submit your entries by 31 March</p>            
            <iframe width="560" height="315" src="https://www.youtube.com/watch?v=mCmgT6x_ZoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
            <h3 className="m-0">The Story of Rowena Reddalot</h3>
            <p>Rowena Reddalot is a very well-read frog! One day, she jumps upon a lily pad and then onto a log. She comes across a library in the brook but she has read all the books there until she comes across one particular book... Are you inspired by Rowena? Write your own story inspired by her tale. Submit entries by 25 Feb</p>            
            <iframe width="560" height="315" src="https://www.youtube.com/watch?v=CJf89mS7Nu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
            <h3 className="m-0">The Story of Sir Percy Pilkington</h3>
            <p>Get your creative writing hats on this January! Charlie's Mum is reading all about Sir Percy Pilkington and the Dragon, a delightful tale about a knight who wasn't quite ready for the fight with the dragon and so he comes up with a plan to delay as much as possible - through telling jokes. Send us your own short story and enter before 26th January.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XOGwuUxX3nk?si=NeQKlEFsTOib0IwL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        </div>
      
        <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
          <h3 className="m-0">The Story of GoldiLocks</h3>
          <p>Double the fun this December! Izzy is reading all about Goldilocks, a classic story about a girl and three bears. Feeling inspire? Send us your own short story and enter before 29th December.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Pfcdc7KhmW0?si=tQyU5M19b4Nfs__M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        </div>

        <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
          <h3 className="m-0">The Story of Pirates! ARRRRR!</h3>
          <p>This month, Charlie Cook is reading all about pirate adventures, magical islands and discovering hidden treasures. Use these themes to write us your own short story and enter before 29th December.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TFu0NyINjjY?si=1mtSlz8fpH0bPRgL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> 
  
      </section> 
      <p className="mt-20">
        <video style={{height:"600px", width:"340px"}} className="float-left inline-block shadow-md rounded-xl mr-5 " autoplay="false" controls>
          <source src={competitionVideo} type="video/mp4" />
        </video>
        We will be running a creative writing competition through the run of the tour where young authors can submit short stories, taking inspiration from exerts of the book. <br></br><br></br>
        We will be celebrating entries throughout the year, with winners receiving a book token and selected stories will be published in an anthology at the end of the year.<br></br><br></br>
        From November 2023, we will be releasing a video each month from characters in the show reading excerpts from the book as inspirational and giving more details about the competition and how to enter. These will be released on the Charlie Cook website and social media sites.</p>
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
