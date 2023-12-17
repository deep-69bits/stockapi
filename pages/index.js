import Layout from "@/components/Layout"
import data from '@/public/data.json'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/earning/1')
  })
  return (
    <div>
      <Head>
        <title>Stock Insights</title>
      </Head>
      <Layout data={data} />

    </div>
  )
}
