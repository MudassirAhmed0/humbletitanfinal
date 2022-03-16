import   { useState, useEffect } from 'react'

const FinancialHealth = ({ item }) => {

    const [financialClass, setFinancialClass] = useState("")

    useEffect(() => {
        let data = Number(item[1])
            if(item[0] === "Net Profit Margin"){
                if(data > 0 && data < 0.05 ){
                    setFinancialClass("netprofitone")
                }
                else if(data > 0.05 && data < 0.1 ){
                    setFinancialClass("netprofittwo")
                }
                else if(data > 0.1 && data < 0.2 ){
                    setFinancialClass("netprofitthree")
                }
                else if(data > 0.2 && data < 0.3 ){
                    setFinancialClass("netprofitfour")
                }
                else if(data > 0.3 && data < 0.4 ){
                    setFinancialClass("netprofitfive")
                }
                else if(data > 0.4 && data < 0.5 ){
                    setFinancialClass("netprofitsix")
                }
                else if(data > 0.5 ){
                    setFinancialClass("netprofitsven")
                }
                else if(data > -0.05 && data < 0 ){
                    setFinancialClass("netprofiteight")
                }
                else if(data > -0.1 && data < -0.05 ){
                    setFinancialClass("netprofitnine")
                }
                else if(data > -0.2 && data < -0.1 ){
                    setFinancialClass("netprofitten")
                }
                else if(data > -0.3 && data < -0.2 ){
                    setFinancialClass("netprofiteleven")
                }
                else if(data > -0.4 && data < -0.3 ){
                    setFinancialClass("netprofiteletwelve")
                }
                else if(data > -0.5 && data < -0.4 ){
                    setFinancialClass("netprofitelethirteen")
                }
                else if(data < -0.5 ){
                    setFinancialClass("netprofitelfinal")
                }
            }

            else if(item[0] === "Enterprise/EBITDA"){
                if(data < 0){
                    setFinancialClass("enterpriseone")
                }
                else if(data > 0 && data <= 20){
                    setFinancialClass("enterprisetwo")
                }
            }
            else if(item[0] === "EV to Sales"){
                if(data < 0){
                    setFinancialClass("evtosaleone")
                }
                else if(data > 0 && data < 5){
                    setFinancialClass("evtosaletwo")
                }
                else if(data > 5 && data < 9){
                    setFinancialClass("evtosalethree")
                }
                else if(data > 9){
                    setFinancialClass("evtosalefour")
                }
            }
            else if(item[0] === "EV to Operating Cash Flow"){
                if(data < 0){
                    setFinancialClass("opertaingone")
                }
                else if(data > 0 && data < 15){
                    setFinancialClass("opertaingtwo")
                }
            }
            else if(item[0] === "EV to Free Cash Flow"){
                if(data < 0){
                    setFinancialClass("cashflowone")
                }
            }
            else{
                if(data >= 0){
                    setFinancialClass("elseone")
                }
                else if(data > 0.0500000001 && data < 0){
                    setFinancialClass("elsetwo")
                }
                else if(data > 0.100000001 && data < 0.0500000001){
                    setFinancialClass("elsetwo")
                }
                else if(data > 0.200000001 && data < 0.100000001){
                    setFinancialClass("elsethree")
                }
            }
    }, [item]) 
    return (
        <>
        <div className={`abcd_col-6  ${financialClass} `}><h3 className={`${financialClass}  h3_abcd`}  >{item[1]}</h3><br /><span>{item[0]}</span></div>
        </>
    )
}

export default FinancialHealth
