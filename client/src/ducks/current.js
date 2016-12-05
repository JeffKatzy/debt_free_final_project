

export default (state={user: "", card: "", period: ""}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'ADD_CARD_TO_USER':
      return{...state, user: {...state.user, credit_cards: [...state.user.credit_cards, action.payload]} }
    case 'SET_CARD':
      return {...state, card: action.payload}
    case 'SET_PERIOD':
      return {...state, period: action.payload}
    default:
      return state
  }
}

export function addNewCardtoUser(input){
  return {type: 'ADD_CARD_TO_USER', payload: input}
}

export function setCurrentUser(input){
  return {type: 'SET_USER', payload: input}
}


export function setCard(input){
  // debugger
  return {type: 'SET_CARD', payload: input}
}


export function setPeriod(input){
  return {type: 'SET_PERIOD', payload: input}
}