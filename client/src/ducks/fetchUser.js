import $ from 'jquery';
// import { browserHistory } from 'react-router'
// import {initialState, setInitial} from './period'
import {setCurrentUser, setCard, setPeriod} from './current'
import {findUser, loginUser} from './signin'
import {setValue} from './tableData'
export function fetchUser(id){
  // debugger
  return function(dispatch){
    dispatch(findUser())
    $.ajax({
      url: `http://localhost:3000/users/${id}`,
      type: 'GET',
      data: id,
      headers: {authorization: localStorage.getItem('token')}
    }).done((response) => {
      // dispatch(persistCard(response))
      dispatch(loginUser( ))
      dispatch(setCurrentUser(response))
      let recentCard = response.credit_cards[0]
      dispatch(setCard(recentCard))
      let recentCardPeriods = response.periods.filter(per=>{
        return per.credit_card_id === recentCard.id
      })
      let recentPeriod = recentCardPeriods[recentCardPeriods.length-1]
      dispatch(setPeriod(recentCardPeriods))
      const newValues = {debt: recentCard.debt,
                      start_month: new Date().getMonth(),
                      start_year: new Date().getFullYear(),
                      end_month: recentPeriod.end_month,
                      end_year: recentPeriod.end_year,
                      creditcard: recentCard.name,
                      payment: recentPeriod.payment,
                      expenditure: recentPeriod.expenditure,
                      interest: recentCard.interest_rate}
      // debugger
      dispatch(setValue(newValues))
    })
  }
}
