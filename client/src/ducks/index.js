import { combineReducers } from 'redux'
import userAccess from './userAccess.js'
import tableData from './tableData.js'
import overpayment from './overpayment.js'
import signup from './signup.js'
import signin from './signin.js'
import newCard from './newcard.js'
import newPeriod from './newperiod.js'
import current from './current.js'

const rootReducer = combineReducers({
  tableData,
  userAccess,
  overpayment,
  signup,
  signin,
  newCard,
  newPeriod,
  current
})

export default rootReducer
