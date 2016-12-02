
user1 = User.create(name: "User Name", email: "email@email.com", password: "password")
user2 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")
user3 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password")

card1 = CreditCard.create(name: "Visa", user_id: 1, debt: 50000.00, interest_rate: 25.00, min_payment: 2.00)
card2 = CreditCard.create(name: "American Express", user_id: 2, debt: 10000.00, interest_rate: 20.00, min_payment: 2.00)

period1 = Period.create(credit_card_id: 1, month: "July", expenditure: 500, payment: 700, year: 2016)
period2 = Period.create(credit_card_id: 1, month: "August", expenditure: 500, payment: 700, year: 2016)
period3 = Period.create(credit_card_id: 1, month: "September", expenditure: 500, payment: 700, year: 2016)
period4 = Period.create(credit_card_id: 1, month: "October", expenditure: 500, payment: 700, year: 2016)
period5 = Period.create(credit_card_id: 2, month: "July", expenditure: 500, payment: 700, year: 2016)
period6 = Period.create(credit_card_id: 2, month: "August", expenditure: 500, payment: 700, year: 2016)
