import $ from 'jquery';
import { browserHistory } from 'react-router'
import {setCard, addNewCardtoUser} from './current'

export function createCard(formData){
  return function(dispatch){
    dispatch(findingCard())
    $.ajax({
      url: 'http://localhost:3000/credit_cards',
      type: 'POST',
      data: {card: formData},
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => { 
      dispatch(setCard(response.card))
      dispatch(addNewCardtoUser(response.card))
    })
  }
}

export default(state = {finding_card: false}, action) => {
  switch (action.type) {
    case 'FINDING_CARD':
      return Object.assign({}, state, {finding_card: true})
    default:
      return state
  }
}
// this never turns off? refactor HTK

export const findingCard = () => ({type: 'FINDING_CARD'})
