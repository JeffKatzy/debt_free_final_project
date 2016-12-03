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
      let recentCard = response.credit_cards[response.credit_cards.length-1]
      dispatch(setCard(recentCard))
      let recentCardPeriods = response.periods.filter(per=>{
        return per.credit_card_id === recentCard.id
      })
      let recentPeriod = recentCardPeriods[recentCardPeriods.length-1]
      dispatch(setPeriod(recentPeriod))
      const newValues = {debt: recentCard.debt,
                      month: recentPeriod.start_month,
                      year: recentPeriod.start_year,
                      end_month: recentPeriod.end_month,
                      end_year: recentPeriod.end_year,
                      creditcard: recentCard.name,
                      payment: recentPeriod.payment,
                      expenditure: recentPeriod.expenditure,
                      interest: recentCard.interest_rate}
      dispatch(setValue(newValues))     
    })
  }
}