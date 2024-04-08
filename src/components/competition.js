import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Competition = () => {   
    const comp = useStaticQuery(graphql`
    query comp {
        allContentfulCompetition(sort: {createdAt: DESC}) {
            edges {
                node {
                    id
                    title     
                    description{
                        raw
                    }      
                    embedCode{
                        embedCode
                    }  
                }
            }
        }
    }       
    `)        
    return(        
        <div>           
            {comp.allContentfulCompetition.edges.map((edge) => {
                if (edge.node.embedCode === null) return <div key={edge.node.id} className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
                    <h3 className="m-0">{edge.node.title}</h3>
                    <div>{renderRichText(edge.node.description)}</div>
                </div>
                else return <div key={edge.node.id} className="bg-light-teal p-10 mt-20 rounded-xl shadow-lg">
                    <h3 className="m-0">{edge.node.title}</h3>
                    <div>{renderRichText(edge.node.description)}</div>
                    <div dangerouslySetInnerHTML={{__html: edge.node.embedCode.embedCode}}></div>                            
                </div>
            })}
        </div>
    )
}

export default Competition