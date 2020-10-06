import Layout from '../../components/layout'
import { getAllFrisyrIds, getFrisyrData } from '../../lib/frillor'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

interface Props {
  frisyrData: {
    number: string;
    title: string;
    date: string;
    contentHtml: string;
  }
}

export default function Post({ frisyrData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{frisyrData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl} style={{display: 'flex', justifyContent: 'space-between'}}>
          {frisyrData.title}
          <span>#{frisyrData.number}</span>
        </h1>
        <div className={utilStyles.lightText}>
          <Date dateString={frisyrData.date}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: frisyrData.contentHtml }}/>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllFrisyrIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const frisyrData = await getFrisyrData(params.id)
  return {
    props: {
      frisyrData
    }
  }
}
