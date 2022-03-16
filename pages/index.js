import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from '../components/Filter'
import Pagination from '../components/Pagination'
import { countryFilters, industryFilters, mainFilters, mkCapFilters, sectorFilters } from '../assets/data/filtersData';
import Newcard from '../components/Newcard'
import Layout from '../components/Layout'

export default function Home() {
  const [allcompany, setAllcompany] = useState([])
  const [mainFilter, setMainFilter] = useState('All Tickers')
  const [filter, setFilter] = useState('')
  const [lastPageNo, setLastPageNo] = useState(1)
  const [pageNo, setPageNo] = useState(1)
  const [search, setSearch] = useState([])


  useEffect(() => {
    setPageNo(1)
  }, [mainFilter])

  const filteration = (name, pNo) => {
    let url = ''
    switch (mainFilter) {
      case "Country":
        url = `https://humbletitanapi.herokuapp.com/countries/${name}?pageNo=${pNo}`
        break;
      case "Sector":
        url = `https://humbletitanapi.herokuapp.com/sectors/${name}?pageNo=${pNo}`
        break;
      case "Industry":
        url = `https://humbletitanapi.herokuapp.com/industries/${name}?pageNo=${pNo}`
        break;
      case "Market Capitalization":
        url = `https://humbletitanapi.herokuapp.com/mkCap/${name}?pageNo=${pNo}`
        break;

    }
    axios.get(url)
      .then(res => {
        setAllcompany(res.data[0]?.items ? res.data[0]?.items : res.data[0])
        let lastpNo = Math.ceil(res.data[1].itemLength[0] / 30)
        setLastPageNo(lastpNo)
      })
  }


  const handleChangeFilter = (newValue) => {
    let filter = newValue.value.replace(' ', '')
    setFilter(filter)
    filteration(filter, pageNo)

  }
  const handleChangeMainFilter = (newValue) => {
    setMainFilter(newValue.value)
    newValue.value === 'All Tickers' && axios.get(`https://humbletitanapi.herokuapp.com/tickers_page/${pageNo}`)
      .then(res => {
        let lastpNo = Math.ceil(res.data[1].itemLength / 30)
        setLastPageNo(lastpNo)
        setAllcompany(res?.data[0]?.items)
      })
  }
  const handleChangeSearch = (newValue) => {
    axios.get(`https://humbletitanapi.herokuapp.com/companynames?companyname=${newValue?.value}`)
      .then(res => {
        setAllcompany(res?.data)
      })
  }

  const getData = (pageNo) => {

    const url = `https://humbletitanapi.herokuapp.com/tickers_page/${pageNo}`
    axios.get(url)
      .then(res => {
        let lastpNo = Math.ceil(res?.data[1]?.itemLength / 30)
        setLastPageNo(lastpNo)
        setAllcompany(res?.data[0]?.items)
      })
  }

  const getSearch = () => {
    const url = `https://humbletitanapi.herokuapp.com/companynames`
    axios.get(url)
      .then(res => {
        console.log(res?.data, 'response hai')
        setSearch(res?.data)
      })
  }
  useEffect(() => {
    getData(pageNo)
    getSearch()
  }, [])
  const moveForward = () => {
    setPageNo(lastPageNo)
    mainFilter !== 'All Tickers' ?
      filteration(filter, lastPageNo) :
      getData(lastPageNo)
  }
  const increament = () => {
    setPageNo(prev => lastPageNo !== prev ? prev + 1 : prev)
    mainFilter !== 'All Tickers' ?
      filteration(filter, lastPageNo !== pageNo ? pageNo + 1 : pageNo) :
      getData(lastPageNo !== pageNo ? pageNo + 1 : pageNo)
  }
  const decreament = () => {
    setPageNo(prev => prev !== 1 ? prev - 1 : 1)
    mainFilter !== 'All Tickers' ?
      filteration(filter, pageNo !== 1 ? pageNo - 1 : 1) :
      getData(pageNo !== 1 ? pageNo - 1 : 1)
  }
  const moveBackward = () => {
    setPageNo(1)
    mainFilter !== 'All Tickers' ?
      filteration(filter, 1) :
      getData(1)
  }

  return (
    <div >
      <Head>
        <title>ALL Tickers || Humble Titan</title>
        <meta name="description" content="Humble Titan is providing you data of more than seven thousands tickers from all over the world." />
      </Head>
      <Layout>
        <div className="top-search-filter-abcd">
          <Filter label='Search Compnay by name:' handleChange={handleChangeSearch} options={search} />
        </div>
        <div className="abcd_row pt-5_abcd abcd_container abcd_align-end Filters">
          <div className='abcd_col-4'>
            <Filter handleChange={handleChangeMainFilter} label='Search Ticker by:' options={mainFilters} />
          </div>
          {mainFilter && mainFilter !== "All Tickers" && <div className='abcd_col-4 ml-1_abcd' >
            <Filter handleChange={handleChangeFilter} label={mainFilter} options={mainFilter === "Country" && countryFilters || mainFilter === "Sector" && sectorFilters || mainFilter === "Industry" && industryFilters || mainFilter === "Market Capitalization" && mkCapFilters} />
          </div>}
          <Pagination increament={increament} decreament={decreament} pageNo={pageNo} moveBackward={moveBackward} moveForward={moveForward} />
        </div>

        <div className="pt-5_abcd pb-5_abcd">
          <div className="abcd_container">
            <div className="abcd_row keyvaluecards_abcd abcd_justify-betwee n  row_wraper_abcd">
              {allcompany && allcompany?.map((data, kay) =>
                data?.Info?.companyname && <Newcard data={data} key={kay} />

              )}
              <div className="abcd_col-12 abcd_row">
                <div className='FooterPagination'>
                  <Pagination increament={increament} decreament={decreament} pageNo={pageNo} moveBackward={moveBackward} moveForward={moveForward} />

                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
