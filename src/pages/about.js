import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./about.module.css"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About the Project"
        description="Information about the site."
        image="/logo.png"
        pathname="/about"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" />
        <h1 className={style.heading}>About Me</h1>
        <div>
          <figure className={style.image}>
            <Img fixed={data.liamImage.childImageSharp.fixed} alt="Liam" />
          </figure>

          <p>
            I am a self-motivated and driven software developer, I pursued
            software development after being introduced to coding in December
            2017. I enlisted into <a href="https://codeclan.com/">CodeClan</a>.
            The course has predominantly given me exposure to JavaScript, Java
            and Ruby and sparked a keen passion for every day learning and
            challenges.
          </p>
          <p>
            Software development has focused my passion for problem solving and
            overcoming user/customer problems as well as writing clean, robust
            and maintainable code.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

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
    liamImage: file(relativePath: { eq: "LiamOne.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
