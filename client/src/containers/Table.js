const React = require('react')
import TableHead from '../components/table/TableHead'
import TableBody from '../components/table/TableBody'

function parseData(data){
  var parts= String(+parseFloat(data).toFixed(2)).split(".")
  parts = String(parts[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
  return parts
}

class Table extends React.Component {
  render() {
    let months = ["January", "February", "March", "April", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let future_data = []
    let theDebt = this.props.data.debt
    let current_month = months.indexOf(this.props.data.month)
    let current_year = this.props.data.year
    let i = 0
    while (theDebt > 0 && i < 1000){
      future_data.push(
      <tr>
        <td key={0} className="text-left">{current_year}</td>
        <td key={1} className="text-left">{months[current_month]}</td>
        <td key={2} className="text-left">${this.parseData(theDebt)}</td>
        <td key={3} className="text-left">${this.parseData(this.props.data.payment)}</td>
        <td key={4} className="text-left">${this.parseData(this.props.data.expenditure)}</td>
        <td key={5} className="text-left">${this.parseData(theDebt * (this.props.data.interest / 1200))}</td>
        <td key={6} className="text-left">${this.parseData(theDebt - parseFloat(this.props.data.payment) + parseFloat(this.props.data.expenditure) + (theDebt * (this.props.data.interest / 1200)))}</td>
      </tr>)
      if (current_month + 1 > months.length - 1){
        current_month = 0
        current_year += 1
      } else {
        current_month += 1
      }
      theDebt = theDebt - parseFloat(this.props.data.payment) + parseFloat(this.props.data.expenditure) + (theDebt * (this.props.data.interest / 1200))
      i += 1
    }
    return (
      <div>
        <table id="the_table" className="table-fill">
          <TableHead />
          <TableBody data={future_data} />
        </table>
      </div>
    )
}
}

module.exports = Table
