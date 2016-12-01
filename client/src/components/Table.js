const React = require('react')

const Table = (props) => {
  let data = []
  for (var i = 0; i < Object.keys(props.data).length; i++){
    data.push(<div key={i}>{Object.keys(props.data)[i]}: {Object.values(props.data)[i]}</div>)
  }
  return (
    <div id="form">
      {data}
    </div>
  )
}

module.exports = Table
