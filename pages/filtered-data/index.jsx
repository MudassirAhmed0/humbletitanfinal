import Head from 'next/head'
import Layout from '../../components/Layout';
import CustomCard from '../../components/CustomCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function FilterData() {

    const [customPages, setCustomPages] = useState([])
    const router = useRouter()


 
    const query = router.query
    useEffect(() => {

        const getData = async () => { 

                const url = `https://humbletitanapi.herokuapp.com/filtered-data?filterlabel=${query?.filterlabel}&filterCondition=${query?.filterCondition}&filterValue=${query?.filterValue}`
                 const { data } = await axios.get(url)
             
                setCustomPages(data)
            } 
        getData()
    }, [router])
    console.log(customPages);

    
    return (
        <div>
            <Head>
                <title>Filtered Pages || Humble Titan</title>
                <meta name="description" content="Humble Titan is providing you data of more than seven thousands tickers from all over the world." />

            </Head>
            <Layout>
                <CustomCard query={query} customPages={customPages} />
            </Layout>
        </div>
    )
}
