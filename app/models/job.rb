class Job < ApplicationRecord
    has_many :rectruiters
    has_many :companys, through: :rectruiters

    validates :name, presence: true
    validates :location, presence: true
    validates :level, presence: true, inclusion: ['Intern', 'Junior', 'Mid', 'Senior']
    validates :contract, inclusion: ['Full Time', 'Part Time']

    def posted_at
        created_at.strftime('%B %e, %Y')
    end
end
