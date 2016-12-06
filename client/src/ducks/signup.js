import $ from 'jquery';
import { browserHistory } from 'react-router'
import {initialState, setInitial} from './tableData'
import {setCurrentUser} from './current'

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
      localStorage.setItem('token', response.jwt)
      dispatch(setCurrentUser(response.user))
      // dispatch(setInitial())
        // do we want to use setInitial here to initialize state.tableData? refactor? 
    })
  }
}

export default(state = {creating_user: false}, action) => {
  switch (action.type) {
    case 'FINDING_USER':
      return Object.assign({}, state, {creating_user: true})
    default:
      return state
  }
}


export const findingUser = () => ({type: 'FINDING_USER'})
