import $ from 'jquery';
// import { browserHistory } from 'react-router'
// import {initialState, setInitial} from './period'
import {setCurrentUser, setCard, setPeriod} from './current'
import {findUser} from './signin'

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
      dispatch(setPeriod(recentCardPeriods[recentCardPeriods.length-1]))

    })
  }
}