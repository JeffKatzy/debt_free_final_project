
user1 = User.create(name: "User Name", email: "email@email.com", password: "password")
user2 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user3 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")

card1 = CreditCard.create(name: "Visa", user_id: 1, debt: 10000.00, interest_rate: 25.00, min_payment: 2.00)
card2 = CreditCard.create(name: "American Express", user_id: 1, debt: 10000.00, interest_rate: 20.00, min_payment: 2.00)

period1 = Period.create(credit_card_id: 1, start_month: "July", start_year: 2016, end_month: "July", end_year: "2016", expenditure: 500, payment: 700)
period2 = Period.create(credit_card_id: 1, start_month: "August", start_year: 2016, end_month: "December", end_year: "2016", expenditure: 500, payment: 700)
period3 = Period.create(credit_card_id: 1, start_month: "September", start_year: 2016, end_month: "March", end_year: "2017", expenditure: 500, payment: 700)
period4 = Period.create(credit_card_id: 1, start_month: "October", start_year: 2016, end_month: "March", end_year: "2017", expenditure: 500, payment: 700)
period5 = Period.create(credit_card_id: 2, start_month: "July", start_year: 2016, end_month: "March", end_year: "2017", expenditure: 500, payment: 700)
period6 = Period.create(credit_card_id: 2, start_month: "August", start_year: 2016, end_month: "March", end_year: "2017", expenditure: 500, payment: 700)
