import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import bottlesPhoto from "../images/bottles-in-bag-photo.jpg"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const backgroundImageStyle = {
    backgroundImage: `url(${bottlesPhoto})`
  }

  return (
    <>
      {/* <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /> */}
      <Header />
      <Layout location={location} title={siteTitle}>
        <main className="blog-post">
          <article
            itemScope
            itemType="http://schema.org/Article"
          >
            <section className='article-title' style={backgroundImageStyle}>
              <div className="title-container">
              <h1 >{post.frontmatter.title}</h1>
              </div>
            </section>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </article>
        </main>
      </Layout>
      <Footer />
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
