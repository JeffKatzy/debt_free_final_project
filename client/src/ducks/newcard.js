import $ from 'jquery';
import { browserHistory } from 'react-router'
// import {initialState, setInitial} from './period'

export function createCard(formData){
  return function(dispatch){
    dispatch(findingCard())
    $.ajax({
      url: 'http://localhost:3000/credit_card',
      type: 'POST',
      data: formData,
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => { 
      dispatch(persistCard(response))
      console.log(response)
    })
  }
}

export default(state = {finding_card: false, card: ''}, action) => {
  switch (action.type) {
    case 'FINDING_CARD':
      return Object.assign({}, state, {finding_card: true})
    case 'PERSIST_CARD':
      return Object.assign({}, state, {finding_card: false, card: action.card})
    default:
      return state
  }
}


export const findingCard = () => ({type: 'FINDING_CARD'})
export const persistCard = (response) => ({type: 'PERSIST_CARD', card: response.card})
