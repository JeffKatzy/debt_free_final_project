import $, { ajax } from 'jquery';
import  {setValue} from './period'
import {setCurrentUser} from './current'

export function locateAndLoginUser(formData){
  return function(dispatch){
    dispatch(findUser())
    $.ajax({
      url: 'http://localhost:3000/sessions',
      type: 'POST',
      data: JSON.stringify({auth: {email: formData.email, password: formData.password}}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json'
    }
    ).then((response) => {
      // debugger
      localStorage.setItem('token', response.jwt)
      // localStorage.setItem('current_user_id', response.last_card.user_id)
      // dispatch(setUser(response))
      dispatch(setCurrentUser(response.user))
      const newValues = { debt: response.last_card.debt,
                      month: response.last_period.month,
                      year: response.last_period.year,
                      creditcard: response.last_card.name,
                      payment: response.last_period.payment,
                      expenditure: response.last_period.expenditure,
                      interest: response.last_card.interest_rate}
      dispatch(setValue(newValues))
    })
  }
}

function findUser(state){
  return { type: 'FIND_USER'}
}

// function setUser(response){
//   return {type: 'LOGIN_USER', current_user: response.user_id}
// }


export default(state = {creating_user: false}, action) => {
  switch (action.type) {
    case 'FIND_USER':
      return Object.assign({}, state, {creating_user: true})
    // case 'LOGIN_USER':
    //   // debugger
    //   return Object.assign({}, state, {creating_user: false, current_user: action.current_user})
    default:
      return state
  }
}

// export const findUser = () => ({type: 'FIND_USER'})
// export const loginUser = () => ({type: 'LOGIN_USER'})
