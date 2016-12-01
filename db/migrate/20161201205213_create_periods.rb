class CreatePeriods < ActiveRecord::Migration[5.0]
  def change
    create_table :periods do |t|
      t.integer :credit_card_id
      t.string :month
      t.integer :year
      t.float :expenditure
      t.float :payment

      t.timestamps
    end
  end
end
