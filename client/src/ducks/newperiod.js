import $ from 'jquery';
import { browserHistory } from 'react-router'
import {setPeriod} from './current'
// import {initialState, setInitial} from './period'

export function createPeriod(formData){
  
  return function(dispatch){
    dispatch(findingPeriod())
    $.ajax({
      url: 'http://localhost:3000/periods',
      type: 'POST',
      data: {period: formData},
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => { 
      // debugger
      // dispatch(persistPeriod(response))
      // console.log(response)
      dispatch(setPeriod(response.period))
    })
  }
}

export default(state = {finding_period: false}, action) => {
  switch (action.type) {
    case 'FINDING_PERIOD':
      return Object.assign({}, state, {finding_period: true})
    // case 'PERSIST_PERIOD':
    //   return Object.assign({}, state, {finding_period: false, period: action.period})
    default:
      return state
  }
}


export const findingPeriod = () => ({type: 'FINDING_PERIOD'})
// export const persistPeriod = (response) => ({type: 'PERSIST_PERIOD', period: response.period})
