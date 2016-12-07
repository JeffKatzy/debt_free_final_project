
user1 = User.create(name: "User Name", email: "email@email.com", password: "password")
user2 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user3 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")

card1 = CreditCard.create(name: "Visa", user_id: 1, debt: 10000.00, interest_rate: 25.00, min_payment: 3.00)
card2 = CreditCard.create(name: "American Express", user_id: 1, debt: 10000.00, interest_rate: 20.00, min_payment: 2.00)

period1 = Period.create(credit_card_id: 1, start_month: "October", start_year: 2019, end_month: "November", end_year: 2019, expenditure: 2500, payment: 4000, name: Faker::Space.nasa_space_craft)
period2 = Period.create(credit_card_id: 1, start_month: "August", start_year: 2016, end_month: "October", end_year: 2016, expenditure: 3000, payment: 5500, name: Faker::Space.planet)
period3 = Period.create(credit_card_id: 1, start_month: "December", start_year: 2016, end_month: "February", end_year: 2017, expenditure: 1500, payment: 1700, name: Faker::Space.star)
period4 = Period.create(credit_card_id: 1, start_month: "June", start_year: 2017, end_month: "July", end_year: 2017, expenditure: 2000, payment: 2200, name: Faker::Space.galaxy)
period5 = Period.create(credit_card_id: 2, start_month: "July", start_year: 2016, end_month: "October", end_year: 2016, expenditure: 700, payment: 500, name: Faker::Space.nebula)
period6 = Period.create(credit_card_id: 2, start_month: "August", start_year: 2017, end_month: "December", end_year: 2017, expenditure: 800, payment: 2000, name: Faker::Space.moon)
