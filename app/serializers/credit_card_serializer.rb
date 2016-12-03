class CreditCardSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :debt, :interest_rate, :min_payment
  # belongs_to :user
end
