import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import EmbeddedContent from '../components/EmbeddedContent/EmbeddedContent'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

const Landing = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges
  const { landing = {} } = config.embeddedContent || {}
  return (
    <Layout>
      <div className='landing-container'>
        <div className='posts-container'>
          <Helmet title={config.siteTitle} />
          <SEO />
          <EmbeddedContent src={landing.src} title={landing.title} />
          <PostListing postEdges={postEdges} />
        </div>
      </div>
    </Layout>
  )
}

export default Landing

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
