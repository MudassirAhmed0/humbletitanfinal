import   { useEffect, useState } from 'react'

const Table = ({ item }) => {

    const [business, setBusiness] = useState("")

    useEffect(() => {
        let data = Number(item[2])

        if (item[0] === "Current Ratio") {
            if (data <= 0.9) {
                setBusiness("currentratioone")
            }
            else if (data > 0.9 && data < 1.49) {
                setBusiness("currentratiotwo")
            }
            else if (data > 1.49 && data < 1.99) {
                setBusiness("currentratiothree")
            }
            else if (data >= 1.99) {
                setBusiness("currentratiofour")
            }
        }
        else if (item[0] === "Quick Ratio") {
            if (data >= 0.5) {
                setBusiness("quickratio")
            }
        }
        else if (item[0] === "Cash Ratio") {
            if (data >= 1 && data <= 45 ) {
                setBusiness("cashratio")
            }
        }
        else if (item[0] === "Net Debt to EBITDA Ratio") {
            if (data <= 0.9 ) {
                setBusiness("ebitdaone")
            }
            else if (data > 0.9 && data < 1.49 ) {
                setBusiness("ebitdatwo")
            }
            else if (data > 1.49 && data < 1.99 ) {
                setBusiness("ebitdathree")
            }
            else if (data >= 1.99 ) {
                setBusiness("ebitdafour")
            }
        }
        else if (item[0] === "Return on Capital Employed") {
            if (data > 0 && data < 5 ) {
                setBusiness("capitalemployedone")
            }
            else if (data > 5 && data < 10 ) {
                setBusiness("capitalemployedtwo")
            }
            else if (data > 10 && data < 20 ) {
                setBusiness("capitalemployedthree")
            }
            else if (data > 20 && data < 30 ) {
                setBusiness("capitalemployedfour")
            }
            else if (data > 30 && data < 40 ) {
                setBusiness("capitalemployedfive")
            }
            else if (data > 40 && data < 50 ) {
                setBusiness("capitalemployedsix")
            }
            else if (data > 50 ) {
                setBusiness("capitalemployedseven")
            }
            else if (data > -5 && data < -0 ) {
                setBusiness("capitalemployedeight")
            }
            else if (data > -10 && data < -5 ) {
                setBusiness("capitalemployednine")
            }
            else if (data > -20 && data < -10 ) {
                setBusiness("capitalemployedten")
            }
            else if (data > -30 && data < -20 ) {
                setBusiness("capitalemployedelevne")
            }
            else if (data < -30 ) {
                setBusiness("capitalemployedtwelve")
            }
        }
        else if( item[0] === "Return on Assets" || item[0] === "Return on Equity" ){
            if(data > 0 && data < 0.05){
                setBusiness("assetsequityone")
            }
            else if(data > 0.05 && data < 0.1){
                setBusiness("assetsequitytwo")
            }
            else if(data > 0.1 && data < 0.2){
                setBusiness("assetsequitythree")
            }
            else if(data > 0.2 && data < 0.3){
                setBusiness("assetsequityfour")
            }
            else if(data > 0.3 && data < 0.4){
                setBusiness("assetsequityfive")
            }
            else if(data > 0.4 && data < 0.5){
                setBusiness("assetsequitysix")
            }
            else if(data >= 0.5 ){
                setBusiness("assetsequityseven")
            }
            else if(data > -0.05 && data < 0 ){
                setBusiness("assetsequityeight")
            }
            else if(data > -0.1 && data < -0.05 ){
                setBusiness("assetsequitynine")
            }
            else if(data > -0.2 && data < -0.1 ){
                setBusiness("assetsequityten")
            }
            else if(data > -0.3 && data < -0.2 ){
                setBusiness("assetsequityeleven")
            }
            else if(data > -0.4 && data < -0.3 ){
                setBusiness("assetsequitytwelve")
            }
            else if(data > -0.5 && data < -0.4 ){
                setBusiness("assetsequitythirteen")
            }
            else if(data < -0.5 ){
                setBusiness("assetsequityforteen")
            }
        }
        else{
            if(data > 0.5 && data < 0.6){
                setBusiness("debetclassone")
            }
            else if(data > 0.4 && data < 0.5){
                setBusiness("debetclasstwo")
            }
            else if(data > 0.3 && data < 0.4){
                setBusiness("debetclassthree")
            }
            else if(data > 0.1 && data < 0.3){
                setBusiness("debetclassfour")
            }
            else if(data > 0.05 && data < 0.1){
                setBusiness("debetclassfive")
            }
            else if(data > 0 && data < 0.05){
                setBusiness("debetclasssix")
            }
            else if(data > 0.6 && data < 0.7){
                setBusiness("debetclassseven")
            }
            else if(data > 0.7 && data < 0.8){
                setBusiness("debetclasseight")
            }
            else if(data > 0.8 && data < 0.9){
                setBusiness("debetclassnine")
            }
            else if(data >= 0.9){
                setBusiness("debetclassten")
            }
        }

    }, [item])

    return (
        <>

            <li className="abcd_row abcd_justify-between li_abcd"><span className='abcd_col-4'>{item[0]}</span><span className="abcd_col-3">{item[1]}</span><span
                className={`abcd_col-3 ${business}`}>{item[2]}</span><span className="abcd_col-2">{item[3]}</span></li>
        </>
    )
}

export default Table
