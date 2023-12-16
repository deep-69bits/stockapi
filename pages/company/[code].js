import React from 'react'
import Layout from '@/components/Layout'
import data from '@/public/data.json'
import { useRouter } from 'next/router'
import PdfViewer from '@/components/PdfViewer'
import Head from 'next/head'

const company = () => {
    const router = useRouter()
    const code = router.query.code
    const id = router.query.earning

    const filteredData = data.filter(item => item.code === code);

    const dt = data.filter(item => item.transcriptid === id && item.code === code);

    return (
        <div>
            <Head>
                <title>{code}</title>
            </Head>
            <Layout data={filteredData} >
                <PdfViewer pdfUrl={dt[0]?.transcript} />
            </Layout>
        </div>
    )
}

export default company