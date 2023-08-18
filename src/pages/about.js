import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
      <Layout pageTitle="About">
          <p>This is a personal and professional repository where I write about 
            anything that comes to mind and run programming and art experiments.
          </p>
      </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage