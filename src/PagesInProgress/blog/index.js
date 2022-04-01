import * as React from "react"
import { Link, graphql } from "gatsby"
import '../../styles/index.scss'
import logo from "../../images/revino-logo-blue.png"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <>
        <Header />
        <Layout location={location} title={siteTitle}>
          <Seo title="All posts" />
          <p>
            There are currently no blog posts on this site.
          </p>
        </Layout>
        <Footer />
      </>
    )
  }

  return (
    <div id='blog'>
      <Header />
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <ol className='blog-list'>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li className="blog-list-item" key={post.fields.slug}>
                <Link to={post.fields.slug} itemProp="url">
                  <div className='blog-item-img'>
                    <img src={logo} alt={title} />
                  </div>
                </Link>
                <article
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div className='blog-list-item-title'>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </div>
                  <div className='blog-list-item-description'>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </div>

                </article>
              </li>
            )
          })}
        </ol>
      </Layout>
      <Footer />
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description

        }
      }
    }
  }
`
