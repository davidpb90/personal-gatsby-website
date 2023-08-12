import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const StoriesPage = () => {
    return (
        <Layout pageTitle="Stories">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Stories" />

export default StoriesPage