import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TopLosersCards from '../../components/TopLosersCards'
import Layout from '../../components/Layout'


export default function Home() {

    const [allcompany, setAllcompany] = useState([])
    const getData = () => {

        const url = `https://humbletitanapi.herokuapp.com/toplosers`
        axios.get(url)
            .then(res => {
                console.log(res)
                setAllcompany(res?.data)
            })
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <div >
            <Head>
                <title>ALL TOP LOSERS TICKERS || Humble Titan</title>
                <meta name="description" content="Humble Titan is providing you data of more than seven thousands tickers from all over the world." />

            </Head>

            <Layout>
                <div className="pt-5_abcd pb-5_abcd">
                    <h1 className='pb-5_abcd abcd_row abcd_justify-center blue-color_abcd f-60_abcd text-transform_abcd'>Top Losers</h1>
                    <div className="abcd_container">
                        <div className="abcd_row keyvaluecards_abcd abcd_justify-between  row_wraper_abcd">
                            {allcompany && allcompany?.map((data, kay) =>
                                data?.Info?.companyname && <TopLosersCards data={data} key={kay} />

                            )}

                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
