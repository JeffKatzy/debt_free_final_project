class User < ApplicationRecord
  has_secure_password
  has_many :creditcards
  has_many :periods, through: :creditcards
  
  validates :email, presence: true
  validates :name, presence: true
  validates :email, uniqueness: true
  validates :password_digest, presence: true
end