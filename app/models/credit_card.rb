class CreditCard < ApplicationRecord
  belongs_to :user
  has_many :periods

  validates :name, presence: true
  validates :interest_rate, presence: true
  validates :debt, presence: true
  validates :interest_rate, :numericality => {:greater_than => 0, :less_than => 100}


end
