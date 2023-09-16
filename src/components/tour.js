import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Tour = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulTourDates {
                edges {
                node {
                    id
                    location                    
                    endDate
                    startDate
                    ticketLink
                    theatre                
                }
                }
            }
            }
    `)
    return (
        <div className="mb-10 flex flex-wrap">  
            {data.allContentfulTourDates.edges.map((edge) => {                   
                let startDate = new Date(edge.node.startDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'});
                let endDate = new Date(edge.node.endDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'});                
                return <div className="bg-light-teal p-5 rounded-xl flex flex-wrap font-serif shadow-xl mb-10" key={edge.node.id}>
                            <h3 className="basis-full text-4xl font-axel text-teal m-0">{edge.node.location}</h3>
                            <p className="basis-full font-bold">{edge.node.theatre}</p>
                            <p className="basis-full m-0 text-light-slate">{startDate} - {endDate}</p>
                            <Link target="_blank" rel="noopener" to={edge.node.ticketLink} className="bg-orange shadow-md hover:bg-slate text-slate p-3 pl-5 pr-5  rounded-xl mt-5">Book Now</Link>
                        </div>
             })}
        </div>
    )
}

export default Tour