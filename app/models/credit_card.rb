class CreditCard < ApplicationRecord
  belongs_to :user
  has_many :periods
  validates :name, presence: true
  validates :interest_rate, presence: true
  validates :debt, presence: true
  validates :interest_rate, :numericality => {:greater_than => 0, :less_than => 100}

  def year_to_date (year_input)
    year = Period.where(year: year_input, credit_card_id: self.id)
    rearranged_year = year.to_a.map do |row| 
      {row.month.to_sym=> 
      {expenditure: row.expenditure, payment: row.payment} }
    end
  end



end
