import  { useEffect, useState } from 'react'

const FinancialGrowthCard = ({i}) => {

    const [FinancialGrowthclass, setFinancialGrowthclass] = useState("")

    useEffect(()=>{
        const content = i[1]
        const re = content?.replace("%", "")
        const data = Number(re)

        if( data >= 0 && data <= 10.0000001 ){
            setFinancialGrowthclass("growthmetricone")
        }
        else if( data >= 10.0000001 && data <= 20 ){
            setFinancialGrowthclass("growthmetrictwo")
        }
        else if( data >= 20.0000001 && data <= 30 ){
            setFinancialGrowthclass("growthmetricthree")
        }
        else if( data >= 30.0000001 && data <= 40 ){
            setFinancialGrowthclass("growthmetricfour")
        }
        else if( data >= 40.0000001 && data <= 50 ){
            setFinancialGrowthclass("growthmetricfive")
        }
        else if( data >= 50.0000001 && data <= 60 ){
            setFinancialGrowthclass("growthmetricsix")
        }
        else if( data >= 60.0000001 && data <= 70 ){
            setFinancialGrowthclass("growthmetricseven")
        }
        else if( data > 70 ){
            setFinancialGrowthclass("growthmetriceight")
        }
        else if( data > -10.0000001 && data < 0 ){
            setFinancialGrowthclass("growthmetricnine")
        }
        else if( data > -20 && data < -10.0000001 ){
            setFinancialGrowthclass("growthmetricten")
        }
        else if( data > -30 && data < -20.0000001 ){
            setFinancialGrowthclass("growthmetriceleven")
        }
        else if( data > -40 && data < -30.0000001 ){
            setFinancialGrowthclass("growthmetriceltwelve")
        }
        else if( data > -50 && data < -40.0000001 ){
            setFinancialGrowthclass("growthmetricelthirteen")
        }
        else if( data > -60 && data < -50.0000001 ){
            setFinancialGrowthclass("growthmetricelforteen")
        }
        else if( data > -70 && data < -60.0000001 ){
            setFinancialGrowthclass("growthmetricelfifteen")
        }
        else if( data <= -70 ){
            setFinancialGrowthclass("growthmetricelsixteen")
        }

    }, [i])

    return (
        <>
            <li className="li_abcd">
                <span><strong>{i[0]}</strong></span> <span className={FinancialGrowthclass} >{i[1]}</span>
            </li>
        </>
    )
}

export default FinancialGrowthCard
