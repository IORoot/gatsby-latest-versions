import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


const Card = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            allAirtable {
            edges {
                node {
                id
                data {
                    date
                    id
                    link
                    title
                    version
                }
                }
            }
            }
        }
    `)

    return (
        <div className="text-emerald-800">
            <div className="grid grid-cols-4 gap-4">
            {
                data.allAirtable.edges.map(nodes => (
                    <a href={nodes.node.data.link} target="_blank" rel="noreferrer" className="bg-stone-200 rounded flex flex-col gap-2 p-2 shadow-sm hover:bg-emerald-500 hover:text-emerald-100 no-underline" key={nodes.node.id}>
                      <div className="m-auto text-center">{nodes.node.data.title}</div>
                      <div className="bg-emerald-400 rounded text-center">{nodes.node.data.version}</div>
                    </a>
                ))
            }
            </div>
        </div> 
    )
}

export default Card