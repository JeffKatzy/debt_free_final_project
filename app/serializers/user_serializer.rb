class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name
  has_many :credit_cards
  has_many :periods, through: :credit_cards
end
