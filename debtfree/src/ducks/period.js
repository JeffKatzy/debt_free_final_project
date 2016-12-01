const initialState = {
  debt: 1500,
  month: "November",
  year: 2016,
  creditcard: "Chase Debit Card",
  payment: 860,
  expenditure: 540,
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return initialState
    case 'SET_VALUE':
      // debugger
      return Object.assign({}, state, action.payload)
    default:
      return {}
  }
}

export const setInitial = () => ({type: 'SET_STATE'})
export const setValue = (obj) => {
  // debugger
  return {type: 'SET_VALUE', payload: obj}
}
// export const setBlank = () => ({type: 'SET_BLANK', action: })
