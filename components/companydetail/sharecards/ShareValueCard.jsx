import  { useEffect, useState } from 'react'

const ShareValueCard = ({ i }) => {

    const [colorclass, setColorclass ] = useState("")

    useEffect(()=>{
        let data = Number(i[1])

        if( i[0] === "Price /Earning (PE Ratio)" ){
             if(data > 0 && data < 5 ){
                setColorclass("earningprone")
             }
             else if(data < 0 ){
                setColorclass("earningprtwo")
             }
        }
        if(i[0] === "Price /Earnings to Growth"){
            if(data < 0){
                setColorclass("growthone")
            }
            else if(data > 0 && data < 1.5){
                setColorclass("growthtwo")
            }
            else if(data > 1.5 && data < 2){
                setColorclass("growththree")
            }
            else if(data > 2 && data < 3){
                setColorclass("growthfour")
            }
        }
        if(i[0] === "Price /Book Value"){
            if(data < 0){
                setColorclass("bookvalueone")
            }
            else if(data > 1 && data < 2){
                setColorclass("bookvaluetwo")
            }
            else if(data > 0 && data < 1){
                setColorclass("bookvaluethree")
            }
        }
        if(i[0] === "Price /Sales"){
            if(data < 0){
                setColorclass("pricesaleone")
            }
            else if(data > 13 && data < 20){
                setColorclass("pricesaletwo")
            }
            else if(data > 3 && data < 13){
                setColorclass("pricesalefour")
            }
        }
        if(i[0] === "Price /Free Cashflow"){
            if(data < 0){
                setColorclass("freecashflowone")
            }
            else if(data > 15 && data < 20){
                setColorclass("freecashflowtwo")
            }
            else if(data > 0 && data < 15){
                setColorclass("freecashflowthree")
            }
        }

        if(i[0] === "Interest Debt /Share"){
            setColorclass("interestdebt")
        }

        else{
            if(data > 0 && data < 5.001 ){
                setColorclass("performanceshareone")
            }
            else if(data > 5.001 && data < 10.001 ){
                setColorclass("performancesharetwo")
            }
            else if(data > 10.001 && data < 20.001 ){
                setColorclass("performancesharethree")
            }
            else if(data > 20.001 && data < 30.001 ){
                setColorclass("performancesharefour")
            }
            else if(data > 30.001 && data < 40.001 ){
                setColorclass("performancesharefive")
            }
            else if(data > 40.001 && data < 50.001 ){
                setColorclass("performancesharesix")
            }
            else if(data > 50.001 ){
                setColorclass("performanceshareseven")
            }
            else if(data > -5.001 && data < 0 ){
                setColorclass("performanceshareeight")
            }
            else if(data > -10.001 && data < -5.001 ){
                setColorclass("performancesharenine")
            }
            else if(data > -20.001 && data < -10.001 ){
                setColorclass("performanceshareten")
            }
            else if(data > -30.001 && data < -20.001 ){
                setColorclass("performanceshareeleven")
            }
            else if(data < -30.001 ){
                setColorclass("performanceshareeltwelve")
            }
        }

    }, [])

    return (
        <>

                <li className="li_abcd" key={i[0]}>
                    <span><strong>{i[0]}</strong></span> <span className={colorclass}>{i[1]}</span>
                </li>
          
        </>
    )
}

export default ShareValueCard
