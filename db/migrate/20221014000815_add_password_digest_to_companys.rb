class AddPasswordDigestToCompanys < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :password_digest, :string
  end
end
