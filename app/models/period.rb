class Period < ApplicationRecord
  belongs_to :creditcard
  validates_uniqueness_of :credit_card_id, scope: [:month, :year]
  validates :month, presence: true
  validates :year, presence: true
  validates :expenditure, presence: true
  validates :payment, presence: true

end
