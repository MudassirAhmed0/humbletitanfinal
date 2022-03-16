import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";

const CompanyProfileCards = ({cardData,conditionClass}) => {

    const [consideredValue, setConsideredValue] = useState("")

    useEffect(()=>{
        const capital =cardData?.mktcap
        let c = capital?.replace('$', '')
        let x = c?.split(",")
        let i = x?.join("")
        let b = Number(i)

        if(b >= 200000000000){
            setConsideredValue("Mega Cap")
        }
        else if(b > 10000000000 && b < 200000000000 ){
            setConsideredValue("Large Cap")
        }
        else if(b > 2000000000 && b < 10000000000){
            setConsideredValue("Mid Cap")
        }
        else if(b > 300000000 && b < 2000000000){
            setConsideredValue("Small Cap")
        }
        else if(b > 50000000 && b < 300000000){
            setConsideredValue("Mirco Cap")
        }
        else if(b < 50000000){
            setConsideredValue("Nano Cap")
        }
    }, [cardData])



    const companyCards=[
        {   
            heading:"Pofile",
            items:[
                {
                    label:'Country',
                    value:cardData?.country,
                    condition:'btn'
                },
                {
                    label:'Currency',
                    value:cardData?.currency,
                },
                {
                    label:'IPO Date',
                    value:cardData?.ipodate,
                },
                {
                    label:'Sector',
                    value:cardData?.sector,
                },
                {
                    label:'Industry',
                    value:cardData?.industry,
                },
                {
                    label:'Employees',
                    value:cardData?.fulltimeemployees,
                },
                {
                    label:'CEO',
                    value:cardData?.ceo,
                },
                {
                    label:'Actively Trading',
                    value:cardData?.isactivelytrading,
                    condition:'btn'
                },
            ]

        },
        {
            heading:"Shares",
            items:[
                {
                    label:'Outstanding Shares',
                    value:cardData?.outstandingshares
                },
                {
                    label:'Market Capitalization',
                    value:cardData?.mktcap,
                    condition:'mkcap',
                    conditionClass:conditionClass[0]
                },
                {
                    label:'Considered',
                    value: consideredValue,
                    condition:"btn"
                },
                {
                    label:'Float Shares Percentage',
                    value:`${cardData?.freefloat}%`
                },
                {
                    label:'Float Shares',
                    value:cardData?.floatshares
                },
                {
                    label:'52 Week Trade Range',
                    value:cardData?.range
                },
                {
                    label:'Beta',
                    value:cardData?.beta,
                    condition:"beta",
                    conditionClass:conditionClass[1]
                } 
            ]
        }
    ]

    return (
        <div className="abcd_row abcd_justify-evenly">
        {
            companyCards.map(card=>
                <CompanyCard key={card.heading} heading={card.heading} items={card.items}/>
            )
        }
           
        </div>);
};

export default CompanyProfileCards;
