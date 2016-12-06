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
      dispatch(setPeriod(response.period))
    })
  }
}
// refactor HTK - we are probably going to need to touch here when we want a logged-in user saving a new payment period? 
export default(state = {finding_period: false}, action) => {
  switch (action.type) {
    case 'FINDING_PERIOD':
      return Object.assign({}, state, {finding_period: true})
      // this never turns off? refactor HTK
    default:
      return state
  }
}


export const findingPeriod = () => ({type: 'FINDING_PERIOD'})
