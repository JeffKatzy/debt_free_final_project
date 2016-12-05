import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../containers/Navbar.js'

import Form from '../components/Form.js'
import Table from './Table.js'
import NewCard from '../components/NewCard'
import NewPeriod from '../components/NewPeriod'
import PeriodList from '../components/PeriodList'
import { setValue } from '../ducks/tableData'
import {setCard} from '../ducks/current'

import '../../public/css/App.css';

class App extends Component {
  render() {
    let contents = (
      <div>
        <div className="container">
          <Navbar userAccess={this.props.userAccess} current={this.props.current} />
        </div>
        <div className="container">
          {/* <PeriodList/> */}
          <Form data={this.props} setValue={this.props.setValue} setCard={this.props.setCard} />
          <Table data={this.props.data}/>
        </div>
      </div>)
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
    },
    setCard: (obj) => {
      dispatch(setCard(obj))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent
