import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Tour = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulTourDates {
                edges {
                node {
                    id
                    location
                }
                }
            }
            }
    `)
    return (
        <div>
            <h1>hello from tour page</h1>
            {data.allContentfulTourDates.edges.map((edge) => {     
                return <h1 key={edge.node.id}>{edge.node.location}</h1>
             })}
        </div>
    )
}

export default Tour