import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../containers/Navbar.js'

import Form from '../components/Form.js'
import Table from './Table.js'
import SignUp from '../components/users/SignUp.js'
import SignIn from '../components/users/SignIn.js'
import SignOut from '../components/users/SignOut.js'
import NewCard from '../components/NewCard'
import NewPeriod from '../components/NewPeriod'
import PeriodList from '../components/PeriodList'
import { setValue } from '../ducks/tableData'

import '../../public/css/App.css';

class App extends Component {
  render() {
    let contents

    if (this.props.current.user !== "") {
      contents = (
      <div>
        <div className="container">
          <Navbar userAccess={this.props.userAccess} />
          <SignOut/>
          <NewCard/>
          <PeriodList/>
        </div>
        <div>
          <Form data={this.props} setValue={this.props.setValue}/>
          <Table data={this.props.data}/>
        </div>
      </div>)
    } else {
      contents = (
      <div>
        <div className="container">
          <Navbar userAccess={this.props.userAccess} />
          <NewCard/>
        </div>
        <div>
          <PeriodList/>
          <Form data={this.props} setValue={this.props.setValue}/>
          <Table data={this.props.data}/>
        </div>
      </div>)
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
  return {data: state.tableData, current: state.current, userAccess: state.userAccess}
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
