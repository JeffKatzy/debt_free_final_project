import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from '../components/Form.js'
import Table from '../components/Table.js'
import SignUp from '../components/users/SignUp.js'
import SignIn from '../components/users/SignIn.js'
import NewCard from '../components/NewCard'
import NewPeriod from '../components/NewPeriod'

import { setValue } from '../ducks/period.js'
import '../App.css';

class App extends Component {
  render() {
    console.log(this)
    let contents
    if (this.props.signin.current_user) {
      contents = <div><Form data={this.props} setValue={this.props.setValue}/><Table data={this.props.data}/></div>
    } else {
      contents = <div><SignIn /><Form data={this.props} setValue={this.props.setValue}/><Table data={this.props.data}/></div>
    }

    return (
      <div className="App">
        {this.props.children}
        <SignUp />
        <SignIn />
        <NewCard />
        <NewPeriod />
        <Form data={this.props.data} setValue={this.props.setValue}/>
        <Table data={this.props.data}/>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {data: state.period, signin: state.signin, signup: state.signup}
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
