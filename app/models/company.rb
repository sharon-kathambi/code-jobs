class Company < ApplicationRecord
    has_many: rectruiters
    has_many: jobs, through: :rectruiters
end
