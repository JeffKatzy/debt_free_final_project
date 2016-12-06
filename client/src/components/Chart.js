import React from 'react'
import Recharts from 'recharts'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
  // debugger
  return(
    <div>
      <LineChart width={730} height={250} data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line dataKey="payment" />
    </LineChart>
    </div>
  )
}

module.exports = Chart
