class User < ApplicationRecord
  has_secure_password
  has_many :credit_cards
  has_many :periods, through: :credit_cards
  
  validates :email, presence: true
  validates :name, presence: true
  validates :email, uniqueness: true
  validates :password_digest, presence: true
end