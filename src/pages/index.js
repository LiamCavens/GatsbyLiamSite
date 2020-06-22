import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fireworks from "../components/fireworks"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="The Project"
        description="A Gatsby site to be proud of."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <Fireworks />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "robots-androids-and-cyborgs-oh-my-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
