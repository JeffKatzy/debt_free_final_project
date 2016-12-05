export default (state={}, action) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return {showSignIn: false, showSignUp: false, addCreditCard: false}
    case 'SIGN_IN':
      return Object.assign({}, state, {showSignIn: !state.showSignIn})
    case 'SIGN_UP':
      return Object.assign({}, state, {showSignUp: !state.showSignUp})
    case 'ADD_CREDIT_CARD':
      return Object.assign({}, state, {addCreditCard: !state.addCreditCard})
    default:
      return {}
  }
}

export const setInitial = () => ({type: 'SET_INITIAL'})
export const signIn = () => ({type: 'SIGN_IN'})
export const signUp = () => ({type: 'SIGN_UP'})
export const addCreditCard = () => ({type: 'ADD_CREDIT_CARD'})
