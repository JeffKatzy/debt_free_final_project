class Period < ApplicationRecord
  belongs_to :credit_card
  # validates_uniqueness_of , scope: [:month, :year]
  validates :credit_card_id, uniqueness: {scope: [:month, :year]}
  validates :month, presence: true
  validates :year, presence: true
  validates :expenditure, presence: true
  validates :payment, presence: true
  after_initialize :defaults, unless: :persisted?

  def defaults
    self.expenditure||= 0
    self.payment||= 0
    self.created_at||= Time.now.strftime("%Y-%m-%d %H:%M:%S")
    self.updated_at||= Time.now.strftime("%Y-%m-%d %H:%M:%S")
    self.save
  end 

  # def self.year_to_date (year_input, current_card)
  #   year = Period.where(year: year_input, credit_card_id: current_card)
  #   rearranged_year = year.to_a.map do |row| 
  #     {row.month.to_sym=> 
  #     {expenditure: row.expenditure, payment: row.payment} }
  #   end
  # end



end