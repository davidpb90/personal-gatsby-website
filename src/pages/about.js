import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
      <Layout pageTitle="About">
          <p>This is a personal and professional repository where I write about 
            anything that comes to mind and run programming and art experiments.
          </p>
          <StaticImage
            alt="Me with some cats in Rome"
            src="../images/david.jpeg"
          />
      </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage