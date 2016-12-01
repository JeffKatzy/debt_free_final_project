import $ from 'jquery';
import { browserHistory } from 'react-router'

export function createUser(formData){
  return function(dispatch){
    dispatch({type: 'CREATING_USER'})
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({auth: {name: formData.name, email: formData.email, password: formData.password}}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json'
    }).done((response) => {
      browserHistory.push('/newtask')
      localStorage.setItem('token', response.jwt)
      dispatch({type: 'LOGIN_USER', current_user: response.userId})

    })
  }
}

export function signup(state = {creating_user: true, current_user: null}, action){
  switch (action.type) {
    case 'CREATING_USER':
      return {...state, creating_user: true}
      break;
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}
