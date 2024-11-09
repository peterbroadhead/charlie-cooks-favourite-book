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
        </p>
      </div>

      <div className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
        <StaticImage src="../images/jazmine.jpeg" height={200} className="mb-5 float-left mr-10 rounded-lg" alt="Jazmine Headshot"/>
        <h3 className="m-0 font-axel text-teal text-2xl">Jazmine Wilkinson – Izzy</h3>
        <p>Jazmine trained at Rose Bruford College.</p>
        <p>Theatre Credits include: Drafters (Jazz Central, New York), Shadow Games (UK Tour), Gilgamesh (White Bear Theatre), Christmas at Kew (open air theatre at Kew Gardens), Webster in Shakespeare in Love (Theatre Royal Bath & UK Tour), The Border (UK Tour), Juliet in Romeo & Juliet (The Orange Tree Theatre), 3rd Witch in MacBeth (The Orange Tree Theatre), Grandad Anansi (UK Tour), The Pixie and the Pudding (Little Angel Studios), The Slightly Annoying Elephant (Edinburgh Fringe Festival), The Everywhere Bear (Little Angel Theatre), The Curious Rat (Little Angel Studios), Endz (Lyric Hammersmith Scratch Night)</p>
        <p>Screen Credits include: The Sermon, Like Brother, Like Sister, Bad Friends, The Veins in her Eyelids, The Train, The Art of Dating, Popped, The Date, The Left Trail, Little Bell and the Moon, Lead in Pray by Tora Kamanja (music video), Joe Lycett’s Got Your Back (Channel 4)</p>
        <p>Other Notable Credits include: Still Photography for White Claw and Dovetailed</p>
        <p>Charlie Cook’s Favourite Book is Jazmine’s West End Debut.</p>
        {/* <p className="flex">
          <Link className="flex" to="https://www.instagram.com/freyaxstephenson/" target="_blank">
            <FaInstagramSquare size={50}/>
          </Link>
          <Link className="flex" to="https://www.twitter.com/fizz_freya/" target="_blank">
            <FaTwitterSquare size={50}/>
          </Link>
        </p>*/}
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
