import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PhotographyPage = () => {
    return (
        <Layout pageTitle="Photography">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Photography" />

export default PhotographyPage