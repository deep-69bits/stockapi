import Layout from "@/components/Layout"
import data from '@/public/data.json'
import Head from 'next/head'
export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Stock Insights</title>
      </Head>
      <Layout data={data} />

    </div>
  )
}
