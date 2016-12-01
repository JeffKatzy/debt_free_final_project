import { combineReducers } from 'redux'
import period from './period.js'
import overpayment from './overpayment.js'

const rootReducer = combineReducers({
  period,
  overpayment
})

export default rootReducer
