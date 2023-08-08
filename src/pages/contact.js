import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  return (
      <Layout pageTitle="Contact">
          <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage