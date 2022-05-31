import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SVG from './svg'

const Card = () => {

    const data = useStaticQuery(graphql`
        query {
            allVersions(sort: {fields: title}) {
                nodes {
                    id
                    category
                    colour1
                    colour2
                    company
                    date
                    link
                    logo_url
                    title
                    version
                }
            }
        }
    `)

    return (
        <div className="text-emerald-800">
            <div className="grid grid-cols-4 gap-4">
            {
                data.allVersions.nodes.map(nodes => (
                    <a href={nodes.link} target="_blank" rel="noreferrer" style={{fill: nodes.colour1, backgroundColor: nodes.colour2}} className="bg-stone-200 rounded flex flex-col gap-2 p-2 shadow-sm no-underline" key={nodes.id}>
                        <div className="m-auto text-center" style={{color: nodes.colour1}}>{nodes.company}</div>
                        <SVG className="p-8">{nodes.logo_url}</SVG>
                        <div className="m-auto text-center" style={{color: nodes.colour1}}>{nodes.title}</div>
                        <div className="rounded text-center" style={{backgroundColor: nodes.colour1, color: nodes.colour2}}>{nodes.version}</div>
                    </a>
                ))
            }
            </div>
        </div> 
    )
}

export default Card