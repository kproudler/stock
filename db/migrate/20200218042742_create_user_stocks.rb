class CreateUserStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :user_stocks do |t|
      t.integer :stock_id
      t.integer :user_id

      t.timestamps
    end
  end
end
