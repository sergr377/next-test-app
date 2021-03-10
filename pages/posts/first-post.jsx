import Link from 'next/link'
import Head from 'next/head'
import React from 'react';
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout home={true}>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <img src="/images/profile.jpg" alt="Your Name"/>
        </Layout>
    )
}