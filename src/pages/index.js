import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'


const IndexPage = () => {

  return (
    <Layout pageTitle="Home">
      <h1 className="text-1xl text mb-4" >Latest Versions</h1>
      <p className='mb-10'>This is my first attempt at a Gatsby / Tailwind website.</p>   
      <Card/>
    </Layout>
  )
}
export default IndexPage