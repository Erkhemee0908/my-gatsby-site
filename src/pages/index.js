import * as React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage } from "gatsby-plugin-image";

export default function IndexPage({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>My Web Page</h2>
          <h3>Welcome!</h3>
          <p>Take your time!</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  );
}

//exort banner img

export const query = graphql`query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`