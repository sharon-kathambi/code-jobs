class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :name
      t.string :location
      t.string :level
      t.string :salary
      t.boolean :featured
      t.text :languages, array:true
      t.string :contract
      t.datetime :posted_at

      t.timestamps
    end
  end
end
