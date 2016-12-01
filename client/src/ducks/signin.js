import $ from 'jquery';

export function findUser(formData){
  return function(dispatch){
    dispatch({type: 'FIND_USER'})
    $.ajax({
      url: 'http://localhost:3000/sessions',
      type: 'POST',
      data: JSON.stringify({auth: {email: formData.email, password: formData.password}}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json'
    }).done((response) => 
      localStorage.setItem('token', response.jwt)
      dispatch({type: 'LOGIN_USER', current_user: response.userId})
    })
  }
}

export function signup(state = {creating_user: true, current_user: null}, action){
  switch (action.type) {
    case 'FIND_USER':
      return {...state, creating_user: true}
      break;
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}
