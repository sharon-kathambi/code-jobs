class CreateRectruiters < ActiveRecord::Migration[6.1]
  def change
    create_table :rectruiters do |t|
      t.string :name
      t.string :image
      t.integer :user_id
      t.integer :job_id

      t.timestamps
    end
  end
end
