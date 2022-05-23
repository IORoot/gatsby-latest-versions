// import * as React from 'react'
// import Layout from '../components/layout'


// const Post = (props) => {

//   console.log(props)
  
//   const data = graphql`
//     query MyQuery {
//       mdx(slug: {eq: "post-1"}) {
//         frontmatter {
//           title
//         }
//       }
//     }
//   `

//   return (
//     <Layout pageTitle="Super Cool Blog Posts">
//       <p>My blog post contents will go here (eventually).</p>
//     </Layout>
//   )
// }

// export default Post

import React from "react"
import {
  graphql
} from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const ProjectPage = ({ data }) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="blog-post-container"> 
        <div className="blog-post">
          <h2>{data.mdx.frontmatter.date}</h2>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
  
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`

export default ProjectPage 