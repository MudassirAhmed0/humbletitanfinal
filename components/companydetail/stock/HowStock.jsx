/* import GaugeChart from 'react-gauge-chart';
// import { RadialGauge } from "react-canvas-gauges";
  import {  LinearGauge } from "@progress/kendo-react-gauges";  */ 

import Stockcard from "./Stockcard"


const HowStock = ({content}) => {
  /*   var gauge = new LinearGauge({
        renderTo: '#demo',
        // more settings here
    })
    const value = 30;
    const pointer = {
        value: value,
      }; */
    return (
        <>
            <div className="abcd_container pb-5_abcd pt-5_abcd">
                <div className="abcd_row abcd_justify-between">
                    <div className="abcd_col-4 full-width_abcd">
                        <h3 className="h3_abcd">How the Stock is doing<span className="colored_abcd">.</span></h3>
                        <span className="abcd_widget">
                            {/* <stock-market-widget type="gauge" template="basic" assets="MSFT" low_high="day_low_high" api="yf"></stock-market-widget> */}
                           {/*  <GaugeChart id="gauge-chart2"
                                nrOfLevels={20}
                                percent={0.86}
                            />    
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <GaugeChart id="gauge-chart2"
                                nrOfLevels={20}
                                percent={0.86}
                            />   */}                    
                            {/* <RadialGauge
                                units="Milliseconds"
                                title="Speed"
                                value={50}
                                minValue={0}
                                maxValue={100}
                                majorTicks={[
                                    "1200",
                                    "1100",
                                    "1000",
                                    "900",
                                    "800",
                                    "600",
                                    "400",
                                    "300",
                                    "200",
                                    "100"
                                ]}
                                minorTicks={2}
                            /> */}
                            {/* <RadialGauge pointer={pointer} /> */}
                        </span>
                        {/* <span className="abcd_widget abcd-mt">
                            <stock-market-widget type="gauge" template="basic" assets="MSFT" low_high="52_week_low_high" api="yf"></stock-market-widget>
                        </span> */}
                    </div>
                    {content?.cards?.map(item=>
                        <Stockcard item={item} key={item?.listItems}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default HowStock
