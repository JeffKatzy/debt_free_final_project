class CreatePeriods < ActiveRecord::Migration[5.0]
  def change
    create_table :periods do |t|
      t.integer :credit_card_id
      t.string :start_month
      t.integer :start_year
      t.string :end_month
      t.integer :end_year
      t.float :expenditure, :default => 0
      t.float :payment, :default => 0

      t.timestamps
    end
  end
end
