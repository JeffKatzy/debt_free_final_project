const React = require('react')

const Table = (props) => {
  let data = []
  let theDebt = props.data.debt
  let i = 0
  while (theDebt > 0 && i < 100){
    theDebt = theDebt - props.data.payment + props.data.expenditure - props.data.debt * props.data.interest / 100
    data.push(<tr>
      <td>Debt: </td><td>{theDebt}</td>
      <td>Payment: </td><td>{props.data.payment}</td>
      <td>Expenditures: </td><td>{props.data.expenditure}</td>
    </tr>)
    i += 1
  }
  return (
    <div>
      <table>
        {data}
      </table>
    </div>
  )
}

module.exports = Table
