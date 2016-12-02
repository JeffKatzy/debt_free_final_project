import $ from 'jquery';

export function locateAndLoginUser(formData){
  return function(dispatch){
    dispatch({type: 'FIND_USER'})
    $.ajax({
      url: 'http://localhost:3000/sessions',
      type: 'POST',
      data: JSON.stringify({auth: {email: formData.email, password: formData.password}}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json'
    }).done((response) => {
      // browserHistory.push('/newtask')

      localStorage.setItem('token', response.jwt)
      dispatch({type: 'LOGIN_USER', current_user: response.userId})

    })
  }
}

export default(state = {creating_user: true, current_user: null}, action) => {
  switch (action.type) {
    case 'FIND_USER':
      return {...state, creating_user: true}
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}

export const findUser = () => ({type: 'FIND_USER'})
export const loginUser = () => ({type: 'LOGIN_USER'})
