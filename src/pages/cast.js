import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";

const CastPage = () => (
  <Layout>
    <div className="text-slate">
      <h1 className="text-5xl font-axel p-10 pl-0 pb-5">Meet the Cast</h1>
      <h2 className="text-light-slate italic">The wonderful team that brings the show to life.</h2>      

      <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
        <StaticImage src="../images/Pierre.jpg" height={200} className="mb-5 float-left mr-10 rounded-lg" alt="Pierre Headshot"/>
        <h3 className="m-0 font-axel text-teal text-2xl">Pierre Hanson-Johnson - Charlie</h3>
        <p>Pierre Hanson-Johnson began his training at an independent school of performing arts, Freedom Academy and later graduated as a student at The BRIT School. </p>
        <p>He recently finished touring the UK and Ireland in the stage production of In the Night Garden as Igglepiggle. Pierre expresses his gratitude towards family, friends and Alexander Baker Management for their affection and support.</p>
        <p className="flex">
          <Link className="flex" to="https://www.instagram.com/pierrehansonjohnson/" target="_blank">
            <FaInstagramSquare size={50}/>
          </Link>
        </p>
      </div>

      <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
        <StaticImage src="../images/Georgie.jpg" height={200} className="mb-5 float-left mr-10 rounded-lg" alt="Georgie Headshot"/>
        <h3 className="m-0 font-axel text-teal text-2xl">Georgie Samuels - Mum</h3>
        <p>Training: Georgie Samuels trained at Leeds Conservatoire.</p>
        <p>Theatre: Charlie Cook’s Favourite Book will be Georgie’s professional stage debut. Blonde Bombshells of 1943 (understudy)(Stephen Joseph Theatre).</p>
        <p>Film: Masham (Chocolate Bear) and Unsung (Red Ladder Theatre Company).</p>
        <p className="flex">
          <Link className="flex" to="https://www.instagram.com/georgina.samuels" target="_blank">
            <FaInstagramSquare size={50}/>
          </Link>
          <Link className="flex" to="https://www.facebook.com/georgie.samuels" target="_blank">
            <FaFacebookSquare size={50}/>
          </Link>
          {/*<Link className="flex" to="https://www.twitter.com/georgina.samuels/" target="_blank">
            <FaTwitterSquare size={50}/>
          </Link>*/}
        </p>
      </div>

      <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
        <StaticImage src="../images/freya.jpg" height={200} className="mb-5 float-left mr-10 rounded-lg" alt="freya Headshot"/>
        <h3 className="m-0 font-axel text-teal text-2xl">Freya Stephenson – Izzy</h3>
        <p>Freya is a performer from Kent who loves cups of tea and reading! </p>
        <p>Training: BA Musical Theatre Performance, University of Chichester.</p>
        <p>Theatre includes: Stranger Sings! (The Vaults); Love’s Labour’s Lost, The School for Scandal (Changeling Theatre) and Dirty Rotten Scoundrels (The Alexandra Theatre).</p>
        <p className="flex">
          <Link className="flex" to="https://www.instagram.com/freyaxstephenson/" target="_blank">
            <FaInstagramSquare size={50}/>
          </Link>
          <Link className="flex" to="https://www.twitter.com/fizz_freya/" target="_blank">
            <FaTwitterSquare size={50}/>
          </Link>
        </p>
      </div>

      <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
        <StaticImage src="../images/charliecook-walk.png" height={200} className="mb-5 float-left mr-10 rounded-lg" alt="freya Headshot"/>
        <h3 className="m-0 font-axel text-teal text-2xl">Olivia Presto – Stage Manager</h3>
        <p>Olivia Presto is a London based stage manager. She trained at the University of Hull studying Drama and Theatre Practice, before completing an internship at the Royal Shakespeare Company. She has been working on a freelance basis for Little Angel for the last year. Her other recent credits include Holby City, Pinocchio and Count Arthur Strong’s UK Tour.</p>              
      </div>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Cast" description="Meet the team behind Charlie Cooks Favourite Book" />

export default CastPage
