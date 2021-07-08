import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                primary {
                  hero_content
                  hero_title
                  background_image
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_action_grid {
              type
              primary {
                section_title
              }
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                button_label
                content
                feature_image
                call_to_action_title
              }
            }
            }
          }
        }
      }
    }
  }
`

const IndexPage = (props) => {
  console.log(props)
  return(
  <Layout>
    <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body}/>
  </Layout>
  )
  }

export default IndexPage
