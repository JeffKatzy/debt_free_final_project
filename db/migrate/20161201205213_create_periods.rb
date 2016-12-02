class CreatePeriods < ActiveRecord::Migration[5.0]
  def change
    create_table :periods do |t|
      t.integer :credit_card_id
      t.string :month
      t.integer :year
      t.float :expenditure, :default => 0
      t.float :payment, :default => 0

      t.timestamps
    end
  end
end
