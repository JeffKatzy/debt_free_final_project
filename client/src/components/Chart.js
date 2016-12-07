import React from 'react'
import Recharts from 'recharts'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
  return(
    <div>
      <LineChart width={800} height={500} data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="month"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="payment" stroke="black"/>
        <Line type="monotone" dataKey="expenditure" stroke="red"/>
        <Line type="monotone" dataKey="interest_payed" stroke="green"/>
        <Line type="monotone" dataKey="balance" stroke="blue"/>
        <CartesianGrid />
    </LineChart>
    </div>
  )
}

module.exports = Chart
