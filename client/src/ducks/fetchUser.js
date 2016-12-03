import $ from 'jquery';
// import { browserHistory } from 'react-router'
// import {initialState, setInitial} from './period'
import {setCurrentUser, setCard, setPeriod} from './current'
import {findUser} from './signin'
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
      dispatch(setCurrentUser(response))
      let recentCard = response.credit_cards[response.credit_cards.length-1]
      dispatch(setCard(recentCard))
      let recentCardPeriods = response.periods.filter(per=>{
        return per.credit_card_id === recentCard.id
      })
      let recentPeriod = recentCardPeriods[recentCardPeriods.length-1]
      dispatch(setPeriod(recentPeriod))
      const newValues = {debt: recentCard.debt,
                      month: recentCard.month,
                      year: recentPeriod.year,
                      creditcard: recentCard.name,
                      payment: recentPeriod.payment,
                      expenditure: recentPeriod.expenditure,
                      interest: recentCard.interest_rate}
      dispatch(setValue(newValues))     
    })
  }
}