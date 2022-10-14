class Company < ApplicationRecord
    has_secure_password
    has_many :rectruiters
    has_many :jobs, through: :rectruiters, dependent: :destroy
end
