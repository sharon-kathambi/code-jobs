class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :logo, :employees, :mission, :technologies

  has_many :jobs
end
