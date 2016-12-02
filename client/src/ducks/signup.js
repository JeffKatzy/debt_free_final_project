import $ from 'jquery';
import { browserHistory } from 'react-router'
import {initialState, setInitial} from './period'
export function createUser(formData){
  return function(dispatch){
    dispatch(findingUser())
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({auth: {name: formData.name, email: formData.email, password: formData.password}}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json'
    }).done((response) => {
      debugger
      localStorage.setItem('token', response.jwt)
      dispatch(loginUser(response))
      // dispatch(setInitial())
    })
  }
}

export default(state = {finding_user: false, current_user: null}, action) => {
  switch (action.type) {
    case 'FINDING_USER':
      return Object.assign({}, state, {finding_user: true})
    case 'LOGIN_CREATED_USER':
      return Object.assign({}, state, {finding_user: false, current_user: action.current_user})
    default:
      return state
  }
}


export const findingUser = () => ({type: 'FINDING_USER'})
export const loginUser = (response) => ({type: 'LOGIN_CREATED_USER', current_user: response.user_id})
