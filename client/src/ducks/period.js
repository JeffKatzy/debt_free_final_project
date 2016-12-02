export const initialState = {
  debt: 1500,
  month: "November",
  year: 2016,
  creditcard: "Chase Debit Card",
  payment: 450,
  expenditure: 375,
  interest: 12
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return initialState
    case 'SET_VALUE':
      return Object.assign({}, state, action.payload)
    default:
      return {}
  }
}

export const setInitial = () => ({type: 'SET_STATE'})
export const setValue = (obj) => ({type: 'SET_VALUE', payload: obj})
