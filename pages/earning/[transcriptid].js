import React from 'react'
import Layout from '@/components/Layout'
import data from '@/public/data.json'
import { useRouter } from 'next/router'
import PdfViewer from '@/components/PdfViewer'
import Head from 'next/head'

const transcriptid = () => {
const router = useRouter()
  const transcriptid=router.query.transcriptid
  const companyData = data.find(obj => obj.transcriptid === transcriptid);
  const url= companyData?companyData?.transcript :"https://www.africau.edu/images/default/sample.pdf"
  return (
    <Layout data={data}>
        <Head>
        <title>{companyData?.name}</title>
      </Head>
        <div className='px-2  py-4 w-full'>
      <PdfViewer pdfUrl={url}/>
        </div>
    </Layout>
  )
}

export default transcriptid