import axios from "axios"
import Link from "next/link"
import { useEffect } from "react"
import { useState } from "react"
import Layout from "../components/Layout"


const ListOFCompanies = ({ tickers }) => {
    console.log(tickers)

    return (
        <Layout>
            <h1 className="abcd_container pt-5_abcd pb-2_abcd abcd_row abcd_justify-center blue-color_abcd">All Tickers List</h1>
            <div className="ListOfTickers abcd_row abcd_container pb-5_abcd abcd_justify-between abcd_wrap">
                {
                    tickers?.map(ticker => {
                        if (ticker.companyname)
                            return (<div className="abcd_row pl-1_abcd pr-1_abcd abcd_justify-center text-center_abcd abcd_align-center abcd_col-4 tickerListItem">
                                <Link href='#'><a >{ticker.symbol} - {ticker.companyname}</a></Link>
                            </div>)
                    }
                    )
                }
            </div>
        </Layout>
    )

}

export default ListOFCompanies


export const getServerSideProps = async () => {
    const url = `https://humbletitanapi.herokuapp.com/list-of-companies`
    let { data } = await axios.get(url)


    return {
        props: {
            tickers: data
        }
    }
}