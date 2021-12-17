import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage } from "gatsby-plugin-image";

export default function Projects({ data }) {

  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  console.log(projects)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfilo</h2>
        <h3>Projects and Websites I've created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack} <br /> {project.frontmatter.date.slice(0, 10)}</p >
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at <a href={`mailto: ${contact}`}>{contact}</a> for a quote!</p>
      </div>
    </Layout>
  );
}

//export page query

export const query = graphql`query ProjectsPage {
  projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        date
        thumb {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`