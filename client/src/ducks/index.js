import { combineReducers } from 'redux'
import period from './period.js'
import overpayment from './overpayment.js'
import signup from './signup.js'
import signin from './signin.js'
import newCard from './newcard.js'
import newPeriod from './newperiod.js'

const rootReducer = combineReducers({
  period,
  overpayment,
  signup,
  signin,
  newCard,
  newPeriod
})

export default rootReducer
