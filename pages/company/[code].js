import React from 'react'
import Layout from '@/components/LayoutCompany'
import data from '@/public/data.json'
import { useRouter } from 'next/router'
import PdfViewer from '@/components/PdfViewer'
import Head from 'next/head'

const company = () => {
    const router = useRouter()
    const code = router.query.code
    let id = router.query.earning

     if(id==null){
        var f=1
        data.map((item)=>{
            if(item.code==code && f==1){
                id=item.transcriptid
                f=0
            }
        })
     }
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