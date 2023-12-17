import React from 'react'
import Layout from '@/components/LayoutCompany'
import data from '@/public/data.json'
import Head from 'next/head'
const company = () => {

    return (
        <div>
            <Head>
                <title>Stock Insights</title>
            </Head>
            <Layout data={data} />
        </div>
    )
}

export default company