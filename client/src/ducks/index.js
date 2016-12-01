import { combineReducers } from 'redux'
import period from './period.js'
import overpayment from './overpayment.js'
import signup from './signup.js'
import signin from './signin.js'
const rootReducer = combineReducers({
  period,
  overpayment,
  signup,
  signin
})

export default rootReducer
