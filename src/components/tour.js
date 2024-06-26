import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

let currentMonth = "";

function showCard(location, theatre, startDate, endDate, ticketLink) {
    return <div className="bg-light-teal p-5 rounded-xl flex flex-wrap font-serif shadow-xl mb-10" >
        <h3 className="basis-full text-4xl font-axel text-teal m-0 flex flex-wrap sm:relative sm:items-baseline">
            <span className="basis-full mb-5 mr-5 sm:basis-auto sm:mb-0">{location}</span> 
            <span className="mb-5 basis-full text-slate text-2xl mr-5 sm:mb-0 sm:basis-auto">{theatre}</span> 
            <Link target="_blank" rel="noopener" to={ticketLink} className="sm:ml-auto sm:mb-0 mb-5 float-right text-lg bg-orange shadow-md hover:bg-slate text-slate p-3 pl-5 pr-5  rounded-xl">Book Now</Link>
        </h3>
        <p className="basis-full m-0 font-bold"> {startDate} - {endDate}</p>
    </div>
}

const Tour = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulTourDates(sort: {startDate: ASC}) {
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
                let startDate = new Date(edge.node.startDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'long'});
                let endDate = new Date(edge.node.endDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'long'});                                
                let showMonth = new Date(edge.node.startDate).toLocaleDateString('en-GB', {month: 'long'});
                let showYear = new Date(edge.node.startDate).toLocaleDateString('en-GB', {year: 'numeric'});
                let todaysDate = new Date().getTime();
                let endDateTime = new Date(edge.node.endDate).getTime();
                if (todaysDate < endDateTime ){
                    if (currentMonth === "") {   
                        currentMonth = showMonth;                                
                        return <div className="sm:basis-full" key={edge.node.id}>
                            <h2 className="text-3xl font-bold">{showMonth + " " + showYear}</h2>
                            {showCard(edge.node.location, edge.node.theatre, startDate, endDate, edge.node.ticketLink)}
                        </div>
                    }
                    else if (currentMonth !== showMonth) { 
                        currentMonth = showMonth;                                   
                        return <div className="sm:basis-full" key={edge.node.id}>
                            <h2 className="text-3xl font-bold mt-1 pt-5 border-t-4 border-light-teal">{showMonth + " " + showYear}</h2>
                            {showCard(edge.node.location, edge.node.theatre, startDate, endDate, edge.node.ticketLink)}
                        </div>
                    }
                    else if (currentMonth === showMonth) { 
                        currentMonth = showMonth;                                   
                        return <div className="sm:basis-full" key={edge.node.id}>
                            {showCard(edge.node.location, edge.node.theatre, startDate, endDate, edge.node.ticketLink)}
                        </div>
                    }
                }
             })}
        </div>
    )
}

export default Tour