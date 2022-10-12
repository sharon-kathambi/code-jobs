class AddLogoToCompany < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :logo, :string
  end
end
