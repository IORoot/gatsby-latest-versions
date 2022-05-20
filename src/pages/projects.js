import * as React from 'react'
import Layout from '../components/layout'
import { 
    useStaticQuery,
    graphql, 
    Link 
} from 'gatsby'

const ProjectsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
            edges {
                node {
                id
                frontmatter {
                    title
                    slug
                }
                }
            }
            }
        }
        
    `)

    return (
        <Layout pageTitle="My Projects">
            <ul>
                {
                    data.allMarkdownRemark.edges.map(edges => (
                        <li key={edges.node.id}>
                            <Link to={edges.node.frontmatter.slug}>
                                {edges.node.frontmatter.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export default ProjectsPage