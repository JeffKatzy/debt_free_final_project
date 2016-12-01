import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from '../components/Form.js'
import Table from '../components/Table.js'
import SignUp from '../components/users/SignUp.js'
import { setValue } from '../ducks/period.js'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <SignUp />
        <Form data={this.props.data} setValue={this.props.setValue}/>
        <Table data={this.props.data}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {data: state.period}
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
