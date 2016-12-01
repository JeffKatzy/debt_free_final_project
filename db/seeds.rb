
user1 = User.create(name: "User Name", email: "email@email.com", password: "password")
user2 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password") 
user3 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: "password") 

card1 = CreditCard.create(name: "Visa", user_id: 1, debt: 500.00, interest_rate: 5.00)
card2 = CreditCard.create(name: "Visa", user_id: 2, debt: 500.00, interest_rate: 5.00)

period1 = Period.create(credit_card_id: 1, month: "July", year: 2016)
period2 = Period.create(credit_card_id: 1, month: "August", year: 2016)
period3 = Period.create(credit_card_id: 1, month: "September", year: 2016)
period4 = Period.create(credit_card_id: 1, month: "October", year: 2016)
period5 = Period.create(credit_card_id: 2, month: "July", year: 2016)
period6 = Period.create(credit_card_id: 2, month: "August", year: 2016)
