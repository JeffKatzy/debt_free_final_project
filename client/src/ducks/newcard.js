import $ from 'jquery';
import { browserHistory } from 'react-router'
// import {initialState, setInitial} from './period'
import {setCard} from './current'

export function createCard(formData){
  return function(dispatch){
    dispatch(findingCard())
    $.ajax({
      url: 'http://localhost:3000/credit_cards',
      type: 'POST',
      data: formData,
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => { 
      // dispatch(persistCard(response))
      dispatch(setCard(response.card))
    })
  }
}

export default(state = {finding_card: false, card: ''}, action) => {
  switch (action.type) {
    case 'FINDING_CARD':
      return Object.assign({}, state, {finding_card: true})
    default:
      return state
  }
}


export const findingCard = () => ({type: 'FINDING_CARD'})
// export const persistCard = (response) => ({type: 'PERSIST_CARD', card: response.card})
