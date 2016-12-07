import React from 'react'
import {LineChart, AreaChart, Area, Brush, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
  return(
    <div>
      <LineChart width={600} height={200} data={props.data.slice(0, -1)} syncId="Id"
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="Month"/>
        <YAxis/>
        <Tooltip/>
        <Line type="monotone" dataKey="Payment" stroke="green"/>
        <Line type="monotone" dataKey="Expenditure" stroke="red"/>
        <Line type="monotone" dataKey="Interest" stroke="black"/>
        <Legend />
      </LineChart>
      <AreaChart width={600} height={200} data={props.data.slice(0, -1)} syncId="Id"
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="Month"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='Balance' stroke='blue' fill='blue' />
        <Brush />
        <Legend />
      </AreaChart>







      {/* <LineChart width={800} height={500} data={props.data.slice(0, -1)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="Month"/>
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8"/>
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d"/>
        <Tooltip />
        <Legend />
        <Line yAxisId="right" type="monotone" dataKey="Payment" stroke="black"/>
        <Line yAxisId="right" type="monotone" dataKey="Expenditure" stroke="red"/>
        <Line yAxisId="right" type="monotone" dataKey="Interest" stroke="green"/>
        <Line yAxisId="left" type="monotone" dataKey="Balance" stroke="blue"/>
        <CartesianGrid />
    </LineChart> */}
    </div>
  )
}

module.exports = Chart
