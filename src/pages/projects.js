import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"
import style from "./projects.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Projects"
        description="Come join us at an event in the future!"
        image="/logo.png"
        pathname="/projects"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Liams" />
        <h1 className={style.heading}>Projects</h1>
        <div>
          <p>These are the current projects I have deployed!</p>
        </div>
      </section>
      <section className={style.projects}>
        <div className={style.eventList}>
          <h2 className={style.eventHeading}>Future projects</h2>
          <ul className={style.projects__list}>
            {data.futureProjects.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
        <div className={style.eventList}>
          <h2 className={style.eventHeading}>Past projects</h2>
          <ul className={style.projects__list}>
            {data.pastProjects.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    headerImage: file(relativePath: { eq: "FlickrScreen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    futureProjects: allEvent(
      filter: { collection: { eq: "future" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
    pastProjects: allEvent(
      filter: { collection: { eq: "past" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
  }
`
