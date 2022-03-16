import React, { useEffect, useState } from 'react'
import BlueList from './BlueList'

const BlueCard = ({ item, bigboxes }) => {
    let [l, setL] = useState(false)
    let [bc, setBc] = useState(false)

    useEffect(() => {

        if (item?.heading === 'List of Competitors') {
            setL(true)
        }
        
        if (item?.heading === "Metric Stack 1"){
            setBc(true)
        }


    }, [item])

    return (
        <>

            <div className="abcd_col-4 full-width_abcd keyvaluecard_abcd p-1_abcd">
                <h4 className="blue-color_abcd h4_abcd">
                    {item?.heading}
                </h4>
                <ul className="keyvalues_abcd">

                    {
                        item?.listItems?.map(i =>
                            <BlueList i={i} l={l} bigboxes={bigboxes} bc={bc}  key={i[0]}/> 
                        )
                    }


                </ul>
            </div>


        </>
    )
}

export default BlueCard
