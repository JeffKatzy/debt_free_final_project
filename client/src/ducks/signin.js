import $, { ajax } from 'jquery';
import  {setValue} from './tableData'
import {setCurrentUser} from './current'
import {fetchUser} from './fetchUser'

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
      dispatch(loginUser())
      localStorage.setItem('token', response.jwt)
      let userid = response.user.id
      dispatch(fetchUser(userid))

    })
  }
}

export default(state = {finding_user: false}, action) => {
  switch (action.type) {
    case 'FIND_USER':
      return Object.assign({}, state, {finding_user: true})
    case 'LOGIN_USER':
      return Object.assign({}, state, {finding_user: false})
    default:
      return state
  }
}

export const findUser = () => ({type: 'FIND_USER'})
export const loginUser = () => ({type: 'LOGIN_USER'})
