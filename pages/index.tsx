import Link from 'next/link'
import Head from 'next/head'

import Contador from '../components/contador'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'

import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Marcelo Roberto Jimenez. I'm an electronic engineer and I live in Brazil. I am learning Next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <h1>Home</h1>

      <Contador />

      Read <Link href="/posts/first-post"><a>this page!</a></Link>
      <p />
      Or even <Link href="tempo"><a>Tempo page!</a></Link>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
