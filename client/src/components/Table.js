const React = require('react')

const Table = (props) => {
  let data = []
  let theDebt = props.data.debt
  let i = 0
  while (theDebt > 0 && i < 100){
    theDebt = theDebt - props.data.payment + props.data.expenditure - props.data.debt * (props.data.interest / 12) / 100
    data.push(<tr>
      <td className="text-left">Debt: </td><td>{theDebt}</td>
      <td className="text-left">Payment: </td><td>{props.data.payment}</td>
      <td className="text-left">Expenditures: </td><td>{props.data.expenditure}</td>
    </tr>)
    i += 1
  }
  return (
    <div>
      <h3 className="table-title">Data Table</h3>
      <table className="table-fill">
        {data}
      </table>
    </div>
  )
}

module.exports = Table
