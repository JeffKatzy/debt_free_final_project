class Period < ApplicationRecord
  belongs_to :credit_card
  validates :credit_card_id, presence: true
  validates :start_month, presence: true
  validates :start_year, presence: true
  validates :end_month, presence: true
  validates :end_year, presence: true
  validates :expenditure, presence: true
  validates :payment, presence: true
  validates :name, presence: true
  delegate :user, to: :credit_card 

  # after_initialize :defaults, unless: :persisted?

  # def defaults
  #   self.expenditure||= 0
  #   self.payment||= 0
  #   self.created_at||= Time.now.strftime("%Y-%m-%d %H:%M:%S")
  #   self.updated_at||= Time.now.strftime("%Y-%m-%d %H:%M:%S")
  #   self.save
  # end

  # def self.year_to_date (year_input, current_card)
  #   year = Period.where(year: year_input, credit_card_id: current_card)
  #   rearranged_year = year.to_a.map do |row|
  #     {row.month.to_sym=>
  #     {expenditure: row.expenditure, payment: row.payment} }
  #   end
  # end



end
