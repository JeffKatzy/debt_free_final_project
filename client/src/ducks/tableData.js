import moment from 'moment'

export default (state={}, action) => {
  switch (action.type) {
    // case 'SET_STATE':
    //   return {showSignIn: false, showSignUp: false}
    case 'SET_VALUE':
      return Object.assign({}, state, action.payload)
    default:
      return {}
  }
}

// export const setInitial = () => ({type: 'SET_STATE'})
export const setValue = (obj) => {
 
  return (
    {type: 'SET_VALUE', payload: obj}
  )
}
