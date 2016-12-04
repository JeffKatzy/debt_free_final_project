import React from 'react'

const TableHead = () => {
  return (
    <thead><tr>
      <th className="text-center">Year</th>
      <th className="text-center">Month</th>
      <th className="text-center">Debt</th>
      <th className="text-center">Payment</th>
      <th className="text-center">Expenditure</th>
      <th className="text-center">Interest Payment</th>
      <th className="text-center">New Balance</th>
    </tr></thead>
  )
}

module.exports = TableHead
