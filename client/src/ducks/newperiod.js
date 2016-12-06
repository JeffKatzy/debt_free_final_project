import $ from 'jquery';
import { browserHistory } from 'react-router'
import {setPeriod, addPeriodToUser, removePeriodFromUser, removePeriodFromCurrent} from './current'
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
      dispatch(foundPeriod())
    })
  }
}

export function editPeriod(formData){
  debugger 
  return function(dispatch){
    dispatch(findingPeriod())
    $.ajax({
      url: `http://localhost:3000/periods/` + formData.id,
      type: 'PATCH',
      data: {period: formData},
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => { 
      debugger      
      dispatch(removePeriodFromCurrent(response.period.id)) 
      dispatch(removePeriodFromUser(response.period.id))
      dispatch(setPeriod([response.period]))
      dispatch(addPeriodToUser(response.period))
      dispatch(foundPeriod())
    })

  }

}

export default(state = {finding_period: false}, action) => {
  switch (action.type) {
    case 'FINDING_PERIOD':
      return Object.assign({}, state, {finding_period: true})
    case 'FOUND_PERIOD':
      return Object.assign({}, state, {finding_period: false})
    default:
      return state
  }
}


export const findingPeriod = () => ({type: 'FINDING_PERIOD'})
export const foundPeriod = () => ({type: 'FOUND_PERIOD'})
