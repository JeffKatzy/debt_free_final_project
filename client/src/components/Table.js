const React = require('react')

const Table = (props) => {

  function parseData(data){
    var parts= String(+parseFloat(data).toFixed(2)).split(".")
    parts = String(parts[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
    return parts
  }
  console.log()
  let months = ["January", "February", "March", "April", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let data = [<thead><tr>
    <th className="text-center">Year</th>
    <th className="text-center">Month</th>
    <th className="text-center">Debt</th>
    <th className="text-center">Payment</th>
    <th className="text-center">Expenditure</th>
    <th className="text-center">Interest Payment</th>
    <th className="text-center">New Balance</th>
  </tr></thead>]
  let theDebt = props.data.debt
  let current_month = months.indexOf(props.data.month)
  let current_year = props.data.year
  let i = 0
  while (theDebt > 0 && i < 250){
    data.push(
    <tbody className="table-hover"><tr>
      <td className="text-left">{current_year}</td>
      <td className="text-left">{months[current_month]}</td>
      <td className="text-left">${parseData(theDebt)}</td>
      <td className="text-left">${parseData(props.data.payment)}</td>
      <td className="text-left">${parseData(props.data.expenditure)}</td>
      <td className="text-left">${parseData(theDebt * (props.data.interest / 1200))}</td>
      <td className="text-left">${parseData(theDebt - parseFloat(props.data.payment) + parseFloat(props.data.expenditure) + (theDebt * (props.data.interest / 1200)))}</td>
    </tr></tbody>)
    if (current_month + 1 > months.length - 1){
      current_month = 0
      current_year += 1
    } else {
      current_month += 1
    }
    theDebt = theDebt - parseFloat(props.data.payment) + parseFloat(props.data.expenditure) + (theDebt * (props.data.interest / 1200))
    i += 1
  }
  return (
    <div>
      <table id="the_table" className="table-fill">
        {data}
      </table>
    </div>
  )
}

module.exports = Table
