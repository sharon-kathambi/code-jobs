class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :rectruiters, :user_id, :company_id
  end
end
