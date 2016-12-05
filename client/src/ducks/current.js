import $ from 'jquery';


export default (state={user: "", card: "", periods: []}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'ADD_CARD_TO_USER':
      return{...state, user: {...state.user, credit_cards: [...state.user.credit_cards, action.payload]} }
    case 'SET_CARD':
      return {...state, card: action.payload}
    case 'ADD_PERIOD_TO_USER':
      return{...state, user: {...state.user, periods: [...state.user.periods, action.payload]} }
    case 'REMOVE_PERIOD_FROM_CURRENT':
      var periods = state.periods.filter(item=>{ if (item.name !== action.payload.name)
      {return item}})
      debugger
      return {...state, periods: periods}
    case 'REMOVE_PERIOD_FROM_USER':
      var perioder = state.user.periods.filter(item=>{ return item.name !== action.payload.name})
      var thing = Object.assign(state.user, {}, {periods: perioder})
      return  Object.assign({}, state, {user: thing})
    case 'SET_PERIOD':
      return {...state, periods: [...state.periods, ...action.payload]}
    default:
      return state
  }
}

export function deletePeriodFromRails(input){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/periods/` + input,
      type: 'DELETE',
      data: input, 
      contentType:"application/json; charset=utf-8",
      datatype: 'json',
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => {
      dispatch(removePeriodFromCurrent(response))
      dispatch(removePeriodFromUser(response))
    })
  }

}


export function removePeriodFromCurrent(input){
  return {type: 'REMOVE_PERIOD_FROM_CURRENT', payload: input}
}

export function addNewCardtoUser(input){
  return {type: 'ADD_CARD_TO_USER', payload: input}
}

export function addPeriodToUser(input){
  return {type: 'ADD_PERIOD_TO_USER', payload: input}
}
export function removePeriodFromUser(input){
  return {type: 'REMOVE_PERIOD_FROM_USER', payload: input}
}



export function setCurrentUser(input){
  return {type: 'SET_USER', payload: input}
}


export function setCard(input){
  return {type: 'SET_CARD', payload: input}
}


export function setPeriod(input){
  return {type: 'SET_PERIOD', payload: input}
}