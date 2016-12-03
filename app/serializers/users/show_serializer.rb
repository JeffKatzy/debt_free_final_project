class Users::ShowSerializer < ActiveModel::Serializer
  has_many :credit_cards

end
