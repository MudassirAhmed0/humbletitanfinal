import { useEffect, useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const MyChart = ({ chartData }) => { 
  const [data,setData] = useState([])
  
  
  
  useEffect(()=>{
    const chartKaData =[]
    const result = Object?.keys(chartData)?.map((key) => [(key), chartData[key]]);
    result?.map(item=>{
      let i = {
        name:item[0].replace('date ',"Day "),
        sortingKey:item[0].replace('date ',""),
        label:item[1] !== "" ? item[1] : 0,
        value:item[1] !== "" ? item[1] : 0
      }
      if(item[0] !== 'ticker'){
      chartKaData.push(i)}
    })
    chartKaData?.sort(function(a, b) {
      return a.sortingKey - b.sortingKey;
    }); 
    console.log(chartKaData)
    setData(chartKaData)
  },[])

  return (
    <>
    <div className="mt-5_abcd"></div>
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="value" stroke="#023a51" fill="#023a51" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default MyChart
