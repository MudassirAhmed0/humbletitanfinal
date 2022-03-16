import Head from 'next/head'
import Layout from '../../components/Layout';
import CustomCard from '../../components/CustomCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function FilterData() {

    const [customPages, setCustomPages] = useState([])
    const router = useRouter()


    //     const getData = (newValue) => {
    //         const url = `https://humbletitanapi.herokuapp.com/filtered-data?filterlabel=${newValue?.value}&filterCondition=${newValue?.value}&filterValue=${newValue?.value}`
    //         axios.get(url)
    //         .then(res=>console.log(res))
    //     } 
    //     useEffect(() => {
    //         getData()
    //   }, [])

    useEffect(() => {

        const query = router.query
        console.log(query);
        const getData = async () => { 

                const url = `https://humbletitanapi.herokuapp.com/filtered-data?filterlabel=${query?.filterlabel}&filterCondition=${query?.filterCondition}&filterValue=${query?.filterValue}`
                console.log(url)
                const { data } = await axios.get(url)
                console.log(data);
                setCustomPages(data)
            } 
        getData()
    }, [router])
    console.log(customPages);

    
    return (
        <div>
            <Head>
                <title>CUSTOM PAGES || Humble Titan</title>
                <meta name="description" content="Humble Titan is providing you data of more than seven thousands tickers from all over the world." />

            </Head>
            <Layout>
                <CustomCard customPages={customPages} />
            </Layout>
        </div>
    )
}
