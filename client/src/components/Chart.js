import React from 'react'
import {LineChart, AreaChart, Area, Brush, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
  return(
    <div className="areachart">
      <AreaChart width={600} height={200} data={props.data.slice(0, -1)} syncId="Id"
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="Month"/>
        <YAxis stroke="blue"/>
        <Tooltip/>
        <Area type='monotone' dataKey='Balance' stroke='blue' fill='blue' />
        <Legend />
      </AreaChart>
      <div className="linechart">
      <LineChart width={600} height={200} data={props.data.slice(0, -1)} syncId="Id"
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="Month"/>
        <YAxis yAxisId="left" orientation="left" stroke="brown"/>
        <YAxis yAxisId="right" orientation="right" stroke="orange"/>
        <Tooltip/>
        <Line yAxisId="left" type="monotone" dataKey="Payment" stroke="green"/>
        <Line yAxisId="left" type="monotone" dataKey="Expenditure" stroke="red"/>
        <Line yAxisId="right" type="monotone" dataKey="Interest" stroke="orange"/>
        <Legend />
      </LineChart>
      </div>
    </div>
  )
}

module.exports = Chart
