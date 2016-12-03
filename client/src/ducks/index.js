import { combineReducers } from 'redux'
import tableData from './tableData.js'
import overpayment from './overpayment.js'
import signup from './signup.js'
import signin from './signin.js'
import newCard from './newcard.js'
import newPeriod from './newperiod.js'
import current from './current.js'

const rootReducer = combineReducers({
  tableData,
  overpayment,
  signup,
  signin,
  newCard,
  newPeriod,
  current
})

export default rootReducer
