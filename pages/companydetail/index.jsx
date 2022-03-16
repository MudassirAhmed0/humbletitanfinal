import Head from 'next/head'
import Layout from '../../components/Layout';
import Tickerslider from '../../components/companydetail/Tickerslider';
import Company from '../../components/companydetail/companyprofile/Company';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlueSection from '../../components/companydetail/bluesection/BlueSection';
import Description from '../../components/companydetail/Description';
import Financial from '../../components/companydetail/financial/Financial';
import HowStock from '../../components/companydetail/stock/HowStock';
import BusinessPerformance from '../../components/companydetail/BusinessPerformance';
import SharesValue from '../../components/companydetail/sharecards/SharesValue';
import DonateNow from '../../components/companydetail/DonateNow';
import FinancialGrowth from '../../components/companydetail/financial/FinancialGrowth';
import CTA from '../../components/companydetail/CTA';
import Empower from '../../components/companydetail/empower/Empower';
import { useRouter } from 'next/router';


const CompantDetail = () => {

  const [profile, setProfile] = useState([])
  const [shares, setShares] = useState([])
  const [financial, setFinancial] = useState([])
  const [keymatrics, setKeymatrics] = useState([])
  const [rating, setRating] = useState([])
  const [competitors, setCompetitors] = useState([])
  const [realtimequotes, setRealtimequotes] = useState([])
  const [financialgrowth, setFinancialgrowth] = useState([])
  const [chartData, setChartData] = useState([])
  const router = useRouter()

  useEffect(() => {

    const symbol = router.query.symbol
    const getData = async () => {
      if (symbol) {

        const url = `https://humbletitanapi.herokuapp.com/companydetails/${symbol.toUpperCase()}`
        const competitorsUrl = `https://humbletitanapi.herokuapp.com/competitors/${symbol.toUpperCase()}`
        const { data } = await axios.get(url)
        const competitorsData = await axios.get(competitorsUrl)
        setProfile(data?.companyProfile?.Item?.Info)
        setShares(data?.companyShares?.Item?.Info)
        setFinancial(data?.comapnyFinancialRatio?.Item?.Info)
        setRating(data?.comapnyRating?.Item?.Info)
        setFinancialgrowth(data?.comapnyFinancialGrowth?.Item?.Info)
        setRealtimequotes(data?.comapnyRealTimeQuote?.Item?.Info)
        setKeymatrics(data?.comapnyKeymetrics?.Item?.Info)
        setCompetitors(competitorsData.data)


      }
    }
    getData()
  }, [router])

  useEffect(() => {

    const symbol = router.query.symbol
    const getData = async () => {
      if (symbol) {

        const url = `https://humbletitanapi.herokuapp.com/charts/${symbol.toUpperCase()}` 
        const { data } = await axios.get(url) 
        setChartData(data?.chartData?.Item?.Info)  
      }
    }
    getData()
  }, [router])

  console.log(realtimequotes, "realtimequotes");
  console.log(chartData, "chartData");

  useEffect(() => {
    if (profile.companyname) {
      let title = document.createElement('title')
      title.innerText = `${profile.companyname}  Stock - Humble Titan`
      let meta = document.createElement('meta')
      meta.setAttribute('name', "description")
      meta.setAttribute('content', profile?.description)
      let head = document.querySelector('head')
      head.appendChild(title)
      head.appendChild(meta)
    }
  }, [profile])

  const due =
  {
    heading: "Before we do our due diligence",
    cards: [
      {
        heading: 'Contact Them',
        listItems: [
          ['Phone', profile?.phone ? profile?.phone : 'NA'],
          ['Address', profile?.address ? profile?.address : 'NA'],
          ['City', profile?.city ? profile?.city : 'NA'],
          ['ZipCode', profile?.zip ? profile?.zip : 'NA'],
          ['Website', profile?.website ? profile?.website : 'NA']
        ]
      },
      {
        heading: 'Other Quickies',
        listItems: [
          ['Central Index Key', profile?.cik ? profile?.cik : 'NA'],
          ['ISIN', profile?.isin ? profile?.isin : 'NA'],
          ['CUSIP Number', profile?.cusip ? profile?.cusip : 'NA'],
          ['Exchange', profile?.exchange ? profile?.exchange : 'NA'],
          ['DCF', profile?.dcf ? profile?.dcf : 'NA']
        ]
      },
      {
        heading: 'Starter Ratios',
        listItems: [
          ['Price to Earnings', profile?.price ? profile?.price : 'NA'],
          ['Earnings Yield', keymatrics?.earningsyieldttm ? keymatrics?.earningsyieldttm : 'NA'],
          ['Graham Number', keymatrics?.grahamnumberttm ? keymatrics?.grahamnumberttm : 'NA'],
          ['Interest Coverage', keymatrics?.interestcoveragettm ? keymatrics?.interestcoveragettm : 'NA'],
          ['ROIC', keymatrics?.roicttm ? keymatrics?.roicttm : 'NA']
        ]
      },

    ]
  }

  const marketRating =
  {
    heading: "The market and ratings",
    cards: [
      {
        heading: 'Where and What',
        listItems: [
          ['Country', profile?.country ? profile?.country : 'NA'],
          ['Industry', profile?.industry ? profile?.industry : 'NA'],
          ['Sector', profile?.sector ? profile?.sector : 'NA']
        ]
      },
      {
        heading: 'Ratings',
        listItems: [
          ['Overall Rating', rating?.rating ? rating?.rating : 'NA'],
          ['Rating Recommendation', rating?.ratingrecommendation ? rating?.ratingrecommendation : 'NA'],
          ['ROE Rating', rating?.ratingdetailsroerecommendation ? rating?.ratingdetailsroerecommendation : 'NA'],
          ['ROA Rating', rating?.ratingdetailsroarecommendation ? rating?.ratingdetailsroarecommendation : 'NA'],
          ['DE Rating', rating?.ratingdetailsderecommendation ? rating?.ratingdetailsderecommendation : 'NA'],
          ['P/E Rating', rating?.ratingdetailsperecommendation ? rating?.ratingdetailsperecommendation : 'NA'],
          ['P/B Rating', rating?.ratingdetailspbrecommendation ? rating?.ratingdetailspbrecommendation : 'NA']
        ]
      },
      {
        heading: 'List of Competitors',
        listItems: [

        ]
      },

    ]
  }
  competitors?.map(item => marketRating?.cards[2]?.listItems?.push(item))
console.log(competitors,'compe')
  const management =
  {
    heading: "A closer look at Management",
    cards: [
      {
        heading: 'Turnover Ratios',
        listItems: [
          ['Receivables Turnover', keymatrics?.receivablesturnoverttm ? keymatrics?.receivablesturnoverttm : 'NA'],
          ['Payables Turnover', keymatrics?.payablesturnoverttm ? keymatrics?.payablesturnoverttm : 'NA'],
          ['Inventory Turnover', keymatrics?.inventoryturnoverttm ? keymatrics?.inventoryturnoverttm : 'NA'],
          ['Fixed Asset Turnover', financial?.fixedassetturnoverttm ? financial?.fixedassetturnoverttm : 'NA'],
          ['Asset Turnover', financial?.assetturnoverttm ? financial?.assetturnoverttm : 'NA']
        ]
      },
      {
        heading: 'Debt Ratios',
        listItems: [
          ['Debt Ratio', financial?.debtratiottm ? financial?.debtratiottm : 'NA'],
          ['Debt Equity Ratio', financial?.debtequityratiottm ? financial?.debtequityratiottm : 'NA'],
          ['Long Term Debt to Capitalization', financial?.longtermdebttocapitalizationttm ? financial?.longtermdebttocapitalizationttm : 'NA'],
          ['Total Debt To Capitalization', financial?.totaldebttocapitalizationttm ? financial?.totaldebttocapitalizationttm : 'NA'],
          ['Interest Coverage', financial?.interestcoveragettm ? financial?.interestcoveragettm : 'NA'],
          ['Cashflow to Debt', financial?.cashflowtodebtratiottm ? financial?.cashflowtodebtratiottm : 'NA'],
          ['Company Equity Multiplier', financial?.companyequitymultiplierttm ? financial?.companyequitymultiplierttm : 'NA']
        ]
      },
      {
        heading: 'Other Business Ratios',
        listItems: [
          ['Days of Sales Outstanding', financial?.daysofpayablesoutstandingttm ? financial?.daysofpayablesoutstandingttm : 'NA'],
          ['Days of Inventory Outstanding', financial?.daysofinventoryoutstandingttm ? financial?.daysofinventoryoutstandingttm : 'NA'],
          ['Operating Cycle', financial?.operatingcyclettm ? financial?.operatingcyclettm : 'NA'],
          ['Days of Payables Outstanding', financial?.daysofpayablesoutstandingttm ? financial?.daysofpayablesoutstandingttm : 'NA'],
          ['Cash Conversion Cycle', financial?.cashconversioncyclettm ? financial?.cashconversioncyclettm : 'NA']
        ]
      },

    ]
  }

  const Business =
  {
    heading: "A Microscopic look at Business",
    cards: [
      {
        heading: 'Metric Stack 1',
        listItems: [
          ['Sales General And Administrative To Revenue', keymatrics?.salesgeneralandadministrativetorevenuettm ? keymatrics?.salesgeneralandadministrativetorevenuettm : 'NA'],
          ['Research And Development To Revenue', keymatrics?.researchanddevelopementtorevenuettm ? keymatrics?.researchanddevelopementtorevenuettm : 'NA'],
          ['Intangibles To Total Assets', keymatrics?.intangiblestototalassetsttm ? keymatrics?.intangiblestototalassetsttm : 'NA'],
          ['Capex To Operating Cashflow', keymatrics?.capextooperatingcashflowttm ? keymatrics?.capextooperatingcashflowttm : 'NA'],
          ['Capex to Revenue', keymatrics?.capextorevenuettm ? keymatrics?.capextorevenuettm : 'NA'],
          ['Capex to Depreciation', keymatrics?.capextodepreciationttm ? keymatrics?.capextodepreciationttm : 'NA'],
          ['Stock-based Compensation To Revenue', keymatrics?.stockbasedcompensationtorevenuettm ? keymatrics?.stockbasedcompensationtorevenuettm : 'NA']
        ]
      },
      {
        heading: 'Metric Stack 2',
        listItems: [
          ['Free Cash Flow Yield', keymatrics?.freecashflowyieldttm ? keymatrics?.freecashflowyieldttm : 'NA'],
          ['Income Quality', keymatrics?.incomequalityttm ? keymatrics?.incomequalityttm : 'NA'],
          ['Return On Tangible Assets', keymatrics?.returnontangibleassetsttm ? keymatrics?.returnontangibleassetsttm : 'NA'],
          ['Graham Net Net', keymatrics?.grahamnetnetttm ? keymatrics?.grahamnetnetttm : 'NA'],
          ['Net Current Asset Value', keymatrics?.netcurrentassetvaluettm ? keymatrics?.netcurrentassetvaluettm : 'NA'],
          ['Invested Capital', keymatrics?.investedcapitalttm ? keymatrics?.investedcapitalttm : 'NA'],
          ['Days Sales Outstanding', keymatrics?.dayssalesoutstandingttm ? keymatrics?.dayssalesoutstandingttm : 'NA'],
          ['Days Of Inventory On Hand', keymatrics?.daysofinventoryonhandttm ? keymatrics?.daysofinventoryonhandttm : 'NA']
        ]
      },
      {
        heading: 'Metric Stack 3',
        listItems: [
          ['Working Capital', keymatrics?.workingcapitalttm ? keymatrics?.workingcapitalttm : 'NA'],
          ['Tangible Asset Value', keymatrics?.tangibleassetvaluettm ? keymatrics?.tangibleassetvaluettm : 'NA'],
          ['Average Receivables', keymatrics?.averagereceivablesttm ? keymatrics?.averagereceivablesttm : 'NA'],
          ['Average Payables', keymatrics?.averagepayablesttm ? keymatrics?.averagepayablesttm : 'NA'],
          ['Average Inventory', keymatrics?.averageinventoryttm ? keymatrics?.averageinventoryttm : 'NA'],
          ['Capex Per Share', keymatrics?.cashpersharettm ? keymatrics?.cashpersharettm : 'NA'],
          ['Dividend Per Share', keymatrics?.dividendpersharettm ? keymatrics?.dividendpersharettm : 'NA'],
          ['Debt To Market Cap', keymatrics?.debttomarketcapttm ? keymatrics?.debttomarketcapttm : 'NA']
        ]
      },

    ]
  }

  const FinancialHealth =
  {
    cards: [
      ['Gross Profit Margin', financial?.grossprofitmarginttm ? financial?.grossprofitmarginttm : 'NA'],
      ['Operating Profit', financial?.operatingprofitmarginttm ? financial?.operatingprofitmarginttm : 'NA'],
      ['Pre Tax Profit Margin', financial?.pretaxprofitmarginttm ? financial?.pretaxprofitmarginttm : 'NA'],
      ['Net Profit Margin', financial?.netprofitmarginttm ? financial?.netprofitmarginttm : 'NA'],
      ['Enterprise/EBITDA', keymatrics?.enterprisevalueoverebitdattm ? keymatrics?.enterprisevalueoverebitdattm : 'NA'],
      ['EV to Sales', keymatrics?.evtosalesttm ? keymatrics?.evtosalesttm : 'NA'],
      ['EV to Operating Cash Flow', keymatrics?.evtooperatingcashflowttm ? keymatrics?.evtooperatingcashflowttm : 'NA'],
      ['EV to Free Cash Flow', keymatrics?.evtofreecashflowttm ? keymatrics?.evtofreecashflowttm : 'NA']
    ]
  }

  const Stockisdoing =
  {
    cards: [
      {
        heading: 'Recent Price Action',
        pera: 'Let’s take a look at how things looked yesterday',
        listItems: [
          ['Previous Close', realtimequotes?.previousclose ? realtimequotes?.previousclose : 'NA'],
          ['Day Open', realtimequotes?.open ? realtimequotes?.open : 'NA'],
          ['Day Change', realtimequotes?.change ? realtimequotes?.change : 'NA'],
          ['% Day Change', realtimequotes?.changespercentage ? realtimequotes?.changespercentage : 'NA'],
          ['Day Low', realtimequotes?.daylow ? realtimequotes?.daylow : 'NA'],
          ['Day High', realtimequotes?.dayhigh ? realtimequotes?.dayhigh : 'NA'],
          ['Volume', realtimequotes?.volume ? realtimequotes?.volume : 'NA']
        ]
      },
      {
        heading: 'Historic Price Action',
        pera: 'For a bit of context don’t forget the wider view',
        listItems: [
          ['Year Low', realtimequotes?.yearlow ? realtimequotes?.yearlow : 'NA'],
          ['Year High', realtimequotes?.yearhigh ? realtimequotes?.yearhigh : 'NA'],
          ['50 Day Avg.', realtimequotes?.priceavg50 ? realtimequotes?.priceavg50 : 'NA'],
          ['200 Day Avg.', realtimequotes?.priceavg200 ? realtimequotes?.priceavg200 : 'NA'],
          ['% of Year High', realtimequotes?.dayhigh ? realtimequotes?.dayhigh : 'NA'],
          ['% of Year Low', realtimequotes?.daylow ? realtimequotes?.daylow : 'NA'],
          ['Average Volume', realtimequotes?.avgvolume ? realtimequotes?.avgvolume : 'NA']
        ]
      }

    ]
  }

  const Businessperformance =
  {
    cards: [
      ['Current Ratio', 'Over 1', financial?.currentratiottm ? financial?.currentratiottm : 'NA', 'OK', '1'],
      ['Quick Ratio', 'Over 1', financial?.quickratiottm ? financial?.quickratiottm : 'NA', 'OK', '2'],
      ['Cash Ratio', 'Over 1', financial?.cashratiottm ? financial?.cashratiottm : 'NA', 'OK', '4'],
      ['Debt to Asset Ratio', 'Over 1', keymatrics?.debttoassetsttm ? keymatrics?.debttoassetsttm : 'NA', 'OK', '5'],
      ['Debt to Equity Ratio', 'Over 1', keymatrics?.debttoequityttm ? keymatrics?.debttoequityttm : 'NA', 'OK', '6'],
      ['Net Debt to EBITDA Ratio', 'Over 1', keymatrics?.netdebttoebitdattm ? keymatrics?.netdebttoebitdattm : 'NA', 'OK', '7'],
      ['Return on Assets', 'Over 1', financial?.returnonassetsttm ? financial?.returnonassetsttm : 'NA', 'OK', '8'],
      ['Return on Equity', 'Over 1', financial?.returnonequityttm ? financial?.returnonequityttm : 'NA', 'OK', '9'],
      ['Return on Capital Employed', 'Over 1', financial?.returnoncapitalemployedttm ? financial?.returnoncapitalemployedttm : 'NA', 'OK', '10']
    ]
  }

  const Realvalue =
  {
    cards: [
      {
        heading: "Price of Stock Ratios",
        pera: "Are you investors paying too much for what they are getting?",
        listItems: [
          ['Price /Earning (PE Ratio)', financial?.priceearningsratiottm ? financial?.priceearningsratiottm : 'NA'],
          ['Price /Earnings to Growth', financial?.priceearningstogrowthratiottm ? financial?.priceearningstogrowthratiottm : 'NA'],
          ['Price /Book Value', financial?.pricebookvalueratiottm ? financial?.pricebookvalueratiottm : 'NA'],
          ['Price /Sales', financial?.pricesalesratiottm ? financial?.pricesalesratiottm : 'NA'],
          ['Price /Free Cashflow', financial?.pricetofreecashflowsratiottm ? financial?.pricetofreecashflowsratiottm : 'NA'],
          ['Price /Operating Cashflow', financial?.pricetooperatingcashflowsratiottm ? financial?.pricetooperatingcashflowsratiottm : 'NA'],
        ]
      },
      {
        heading: 'Performance Per Share',
        pera: 'The story and value behind each share',
        listItems: [
          ['Revenue /share', keymatrics?.revenuepersharettm ? keymatrics?.revenuepersharettm : 'NA'],
          ['Net Income /Share', keymatrics?.netincomepersharettm ? keymatrics?.netincomepersharettm : 'NA'],
          ['Operating Cashflow /Share', keymatrics?.operatingcashflowpersharettm ? keymatrics?.operatingcashflowpersharettm : 'NA'],
          ['Free Cashflow /Share', keymatrics?.freecashflowpersharettm ? keymatrics?.freecashflowpersharettm : 'NA'],
          ['Cash /Share', keymatrics?.cashpersharettm ? keymatrics?.cashpersharettm : 'NA'],
          ['Book Value /Share', keymatrics?.bookvaluepersharettm ? keymatrics?.bookvaluepersharettm : 'NA'],
          ['Tangible book Value', keymatrics?.tangiblebookvaluepersharettm ? keymatrics?.tangiblebookvaluepersharettm : 'NA'],
          ['Shareholder Equity /Share', keymatrics?.shareholdersequitypersharettm ? keymatrics?.shareholdersequitypersharettm : 'NA'],
          ['Interest Debt /Share', keymatrics?.interestdebtpersharettm ? keymatrics?.interestdebtpersharettm : 'NA']
        ]
      }

    ]
  }

  const Financialgrowths =
  {
    cards: [
      {
        id: 0,
        heading: 'Performance YoY',
        pera: 'Let’s take a look at how things looked yesterday',
        listItems: [
          ['Revenue', financialgrowth?.revenuegrowth ? financialgrowth?.revenuegrowth : 'NA'],
          ['Gross Profit', financialgrowth?.grossprofitgrowth ? financialgrowth?.grossprofitgrowth : 'NA'],
          ['EBIT', financialgrowth?.ebitgrowth ? financialgrowth?.ebitgrowth : 'NA'],
          ['Oper. Income', financialgrowth?.operatingincomegrowth ? financialgrowth?.operatingincomegrowth : 'NA'],
          ['Net Income', financialgrowth?.netincomegrowth ? financialgrowth?.netincomegrowth : 'NA'],
          ['Oper. Cash Flow', financialgrowth?.operatingcashflowgrowth ? financialgrowth?.operatingcashflowgrowth : 'NA'],
          ['Free Cash Flow', financialgrowth?.freecashflowgrowth ? financialgrowth?.freecashflowgrowth : 'NA'],
          ['EPS Diluted', financialgrowth?.epsdilutedgrowth ? financialgrowth?.epsdilutedgrowth : 'NA'],
          ['EPS', financialgrowth?.epsgrowth ? financialgrowth?.epsgrowth : 'NA'],
          ['Dividend Per Share', financialgrowth?.dividendspersharegrowth ? financialgrowth?.dividendspersharegrowth : 'NA'],
        ]
      },
      {
        id: 1,
        heading: 'Management YoY',
        pera: 'Let’s take a look at how things looked yesterday',
        listItems: [
          ['Receivables', financialgrowth?.receivablesgrowth ? financialgrowth?.receivablesgrowth : 'NA'],
          ['Inventory', financialgrowth?.inventorygrowth ? financialgrowth?.inventorygrowth : 'NA'],
          ['Asset', financialgrowth?.assetgrowth ? financialgrowth?.assetgrowth : 'NA'],
          ['Book Value', financialgrowth?.bookvaluepersharegrowth ? financialgrowth?.bookvaluepersharegrowth : 'NA'],
          ['Debt', financialgrowth?.debtgrowth ? financialgrowth?.debtgrowth : 'NA'],
          ['R/D Expense', financialgrowth?.rdexpensegrowth ? financialgrowth?.rdexpensegrowth : 'NA'],
          ['SGA Expenses', financialgrowth?.sgaexpensesgrowth ? financialgrowth?.sgaexpensesgrowth : 'NA'],
          ['Weighted Average Shares', financialgrowth?.weightedaveragesharesgrowth ? financialgrowth?.weightedaveragesharesgrowth : 'NA'],
          ['Weighted Average Shares Diluted', financialgrowth?.weightedaveragesharesdilutedgrowth ? financialgrowth?.weightedaveragesharesdilutedgrowth : 'NA'],
        ]
      },
      {
        id: 2,
        heading: 'Growth over the last 3 years',
        pera: 'For a bit of context don’t forget the wider view.',
        listItems: [
          ['Revenue /Share', financialgrowth?.threeyrevenuegrowthpershare ? financialgrowth?.threeyrevenuegrowthpershare : 'NA'],
          ['Operating Cash Flow /Share', financialgrowth?.threeyoperatingcfgrowthpershare ? financialgrowth?.threeyoperatingcfgrowthpershare : 'NA'],
          ['Net Income /Share', financialgrowth?.threeynetincomegrowthpershare ? financialgrowth?.threeynetincomegrowthpershare : 'NA'],
          ['Shareholders Equity /Share', financialgrowth?.threeyshareholdersequitygrowthpershare ? financialgrowth?.threeyshareholdersequitygrowthpershare : 'NA'],
          ['Dividend /Share', financialgrowth?.threeydividendpersharegrowthpershare ? financialgrowth?.threeydividendpersharegrowthpershare : 'NA']
        ]
      },
      {
        id: 3,
        heading: 'Growth over the last 5 years',
        pera: 'For a bit of context don’t forget the wider view.',
        listItems: [
          ['Revenue /Share', financialgrowth?.fiveyrevenuegrowthpershare ? financialgrowth?.fiveyrevenuegrowthpershare : 'NA'],
          ['Operating Cash Flow /Share', financialgrowth?.fiveyoperatingcfgrowthpershare ? financialgrowth?.fiveyoperatingcfgrowthpershare : 'NA'],
          ['Net Income /Share', financialgrowth?.fiveynetincomegrowthpershare ? financialgrowth?.fiveynetincomegrowthpershare : 'NA'],
          ['Shareholders Equity /Share', financialgrowth?.fiveyshareholdersequitygrowthpershare ? financialgrowth?.fiveyshareholdersequitygrowthpershare : 'NA'],
          ['Dividend /Share', financialgrowth?.fiveydividendpersharegrowthpershare ? financialgrowth?.fiveydividendpersharegrowthpershare : 'NA']
        ]
      },
      {
        id: 4,
        heading: 'Growth over the last 10 years',
        pera: 'For a bit of context don’t forget the wider view.',
        listItems: [
          ['Revenue /Share', financialgrowth?.tenyrevenuegrowthpershare ? financialgrowth?.tenyrevenuegrowthpershare : 'NA'],
          ['Operating Cash Flow /Share', financialgrowth?.tenyoperatingcfgrowthpershare ? financialgrowth?.tenyoperatingcfgrowthpershare : 'NA'],
          ['Net Income /Share', financialgrowth?.tenynetincomegrowthpershare ? financialgrowth?.tenynetincomegrowthpershare : 'NA'],
          ['Shareholders Equity /Share', financialgrowth?.tenyshareholdersequitygrowthpershare ? financialgrowth?.tenyshareholdersequitygrowthpershare : 'NA'],
          ['Dividend /Share', financialgrowth?.threeydividendpersharegrowthpershare ? financialgrowth?.threeydividendpersharegrowthpershare : 'NA']
        ]
      },

    ]
  }

  return (
    <div>

      <Layout>
        {/* <Tickerslider /> */}
        <Company profile={profile} shares={shares} realtimequotes={realtimequotes} />
        <BlueSection content={due} bigboxes />
        <Description description={profile?.description} chartData={chartData} />
        <BlueSection content={marketRating} bigboxes />
        <Financial content={FinancialHealth} />
        <HowStock content={Stockisdoing} />
        <BusinessPerformance content={Businessperformance} />
        <SharesValue content={Realvalue} />
        <DonateNow />
        <FinancialGrowth content={Financialgrowths} />
        <BlueSection content={management} />
        <BlueSection content={Business} />
        <Empower />
        <CTA />
      </Layout>
    </div>
  )
};

export default CompantDetail;

// export const getInitialProps = async ({ params }) => {
//   const symbol = params.slug
//   const url = `https://humbletitanapi.herokuapp.com/companydetails/${symbol.toUpperCase()}`
//   const competitorsUrl = `https://humbletitanapi.herokuapp.com/competitors/${symbol.toUpperCase()}`
//   const { data } = await axios.get(url)
//   const competitorsData = await axios.get(competitorsUrl)

//   const { companyProfile, companyShares, comapnyFinancialRatio, comapnyKeymetrics, comapnyRating, comapnyRealTimeQuote, comapnyFinancialGrowth } = data
//   return {
//     props: {
//       companyProfile,
//       companyShares,
//       comapnyFinancialRatio,
//       comapnyKeymetrics,
//       comapnyRating,
//       comapnyRealTimeQuote,
//       comapnyFinancialGrowth,
//       competitorsData: competitorsData.data
//     }
//   }

// }