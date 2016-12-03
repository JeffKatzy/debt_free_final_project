import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from '../components/Form.js'
import Table from '../components/Table.js'
import SignUp from '../components/users/SignUp.js'
import SignIn from '../components/users/SignIn.js'
import SignOut from '../components/users/SignOut.js'
import NewCard from '../components/NewCard'
import NewPeriod from '../components/NewPeriod'
import { setValue } from '../ducks/tableData'
import '../App.css';

class App extends Component {
  render() {
    console.log(this)
    let contents

    if (this.props.current.user !== "") {
      contents = <div> <div className="container"><SignOut/><NewCard/><NewPeriod/><PeriodList/></div><Form data={this.props} setValue={this.props.setValue}/><Table data={this.props.data}/></div>
    } else {
      contents = <div><div className="container"><SignIn/><SignUp/></div><div className="container"> <NewCard/> <NewPeriod/><PeriodList/></div><Form data={this.props} setValue={this.props.setValue}/><Table data={this.props.data}/></div>
    }

    return (
      <div className="App">
        {this.props.children}
        {contents}

      </div>
    );
  }
}

function mapStateToProps(state){
  return {data: state.tableData, current: state.current}
}

function mapDispatchToProps(dispatch){
  return {
    setValue: (obj) => {
      dispatch(setValue(obj))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent
