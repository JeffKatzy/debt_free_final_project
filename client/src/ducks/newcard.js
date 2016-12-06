import $ from 'jquery';
import { browserHistory } from 'react-router'
// import {initialState, setInitial} from './period'
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
      // dispatch(persistCard(response))
      dispatch(setCard(response.card))
      dispatch(addNewCardtoUser(response.card))
      dispatch(foundCard())
    })
  }
}

export default(state = {finding_card: false}, action) => {
  switch (action.type) {
    case 'FINDING_CARD':
      return Object.assign({}, state, {finding_card: true})
    case 'FOUND_CARD':
      return Object.assign({}, state, {finding_card: false})

    default:
      return state
  }
}


export const findingCard = () => ({type: 'FINDING_CARD'})
export const foundCard = () => ({type: 'FOUND_CARD'})

// export const persistCard = (response) => ({type: 'PERSIST_CARD', card: response.card})
