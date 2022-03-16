import { useEffect, useState } from 'react'

const BlueList = ({i,bigboxes,l,bc }) => {
    const [bluelist, setBluelist] = useState("")

    useEffect(() => {
        const data = Number(i[1])

        if(i[0] === "Debt Ratio"){
            if(data < 0){
                setBluelist("debtratioone")
            }
            else if(data > 0 && data < 0.5){
                setBluelist("debtratiotwo")
            }
            else if(data > 0.5 && data < 0.7){
                setBluelist("debtratiothree")
            }
            else if(data > 0.7 && data < 1){
                setBluelist("debtratiotfour")
            }
        }

        else if(i[0] === "Debt Equity Ratio"){
            if(data > 0.75 && data < 0.9){
                setBluelist("equityratioone")
            }
            else if(data > 0.9){
                setBluelist("equityratiotwo")
            }
            else if(data > 0 && data < 0.05){
                setBluelist("equityratiothree")
            }
            else if(data > 0.05 && data < 0.1){
                setBluelist("equityratiofour")
            }
            else if(data > 0.3 && data < 0.1){
                setBluelist("equityratiofive")
            }
            else if(data > 0.5 && data < 0.3){
                setBluelist("equityratiosix")
            }
            else if(data > 0.6 && data < 0.4){
                setBluelist("equityratioseven")
            }
        }

        else if(i[0] === "Interest Coverage"){
            if(data < 1){
                setBluelist("coverageone")
            }
            else if(data > 0.5 && data < 0.66){
                setBluelist("coveragetwo")
            }
            else if(data > 0.66){
                setBluelist("coveragethree")
            }
        }
        
        else if (i[0] === "Long Term Debt to Capitalization") {
            if (data > 0.75 && data < 0.9  ) {
                setBluelist("bluelistone")
            }
            else if (data > 0.9  ) {
                setBluelist("bluelisttwo")
            }
            else if (data > 0 && data < 0.05  ) {
                setBluelist("bluelistthree")
            }
            else if (data > 0.1 && data < 0.3 ) {
                setBluelist("bluelistfour")
            }
            else if (data > 0.3 && data < 0.5 ) {
                setBluelist("bluelistfive")
            }
            else if (data > 0.5 && data < 0.6 ) {
                setBluelist("bluelistsix")
            }
        }
        else if(i[0] === "Total Debt To Capitalization"){
            if(data < 1){
                setBluelist("capitalizationone")
            }
            else if(data > 0.5 && data < 0.66){
                setBluelist("capitalizationtwo")
            }
            else if(data > 0.66 ){
                setBluelist("capitalizationthree")
            }
        }
        else if(i[0] === "Cashflow to Debt"){
            if(data < 0){
                setBluelist("cashflowone")
            }
            else if(data > 0.4 && data < 1){
                setBluelist("cashflowtwo")
            }
            else if(data > 1){
                setBluelist("cashflowthree")
            }
        }

        if(i[0] === "Days of Inventory Outstanding"){
            if(data > 0 && data < 15){
                setBluelist("dayofinventoryone")
            }
            else if(data > 15 && data < 30){
                setBluelist("dayofinventorytwo")
            }
            else if(data > 30 && data < 45){
                setBluelist("dayofinventorythree")
            }
        }

        if(i[0] === "Cash Conversion Cycle"){
            if(data < 0){
                setBluelist("conversioncycleone")
            }
            else if(data > 0 && data < 0.0500000001 ){
                setBluelist("conversioncycletwo")
            }
            else if(data > 0.0500000001 && data < 0.100000001 ){
                setBluelist("conversioncyclethree")
            }
            else if(data > 0.100000001 && data < 0.200000001 ){
                setBluelist("conversioncyclefour")
            }
            else if(data > 0.200000001 && data < 0.300000001 ){
                setBluelist("conversioncyclefive")
            }
            else if(data > 0.300000001 && data < 0.500000001 ){
                setBluelist("conversioncyclesix")
            }
            else if(data >0.500000001 ){
                setBluelist("conversioncycleseven")
            }
        }

        else if({bc}){
            if(data < 0){
                setBluelist("metricstackone")
            }
        }


    }, [i])
    return (
        <>
            <li className="li_abcd">
                <span className={`${bigboxes && "contact-other-first-span"}`}> <strong> {i[0]}</strong></span> <span className={`${bigboxes && 'contact-other-second-span '} ${l && "Listofcompetitor "} ${bluelist}`}>{i[1]}</span>
            </li>
        </>
    )
}

export default BlueList