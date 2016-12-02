import $, { ajax } from 'jquery';
import  {initialState, setInitial} from './period'

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
      // browserHistory.push('/newtask')
      localStorage.setItem('token', response.jwt)
      dispatch(setUser(response))
      dispatch(setInitial())
    })
  }
}

function findUser(state){
  return { type: 'FIND_USER'}
}

function setUser(response){
  return {type: 'LOGIN_USER', current_user: response.user_id}
}


export default(state = {creating_user: true, current_user: null}, action) => {
  switch (action.type) {
    case 'FIND_USER':
      return Object.assign({}, state, {creating_user: true})
    case 'LOGIN_USER':
      // debugger
      return Object.assign({}, state, {creating_user: false, current_user: action.current_user})
    default:
      return state
  }
}

// export const findUser = () => ({type: 'FIND_USER'})
// export const loginUser = () => ({type: 'LOGIN_USER'})
