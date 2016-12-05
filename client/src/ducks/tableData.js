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
  if (moment(Object.values(obj)[0], "YYYY-DD-MM", true).isValid()) {
    let date = new Date(Object.values(obj)[0])
    obj = {start_month: date.getMonth(), start_year: date.getFullYear()}
  }
  for (let val in obj) {obj[val] = parseFloat(obj[val])}
  return (
    {type: 'SET_VALUE', payload: obj}
  )
}
