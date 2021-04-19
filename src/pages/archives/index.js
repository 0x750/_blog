import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = () => {
  const lastPosts = [
    {
      date: new Date("2021/04/18"),
      title: "Why you should consider learning PowerShell",
      slug: "/posts/learning-powershell",
    },
  ]

  return (
    <Layout>
      <Seo title="Archives" />
      <h1>Archives</h1>
      <hr />
      {lastPosts.map(e => {
        return (
          <div>
            <code>{e.date.toDateString(``)}</code>

            <span>
              <Link style={{ marginLeft: "1em" }} to={e.slug}>
                {e.title}
              </Link>
            </span>
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage
