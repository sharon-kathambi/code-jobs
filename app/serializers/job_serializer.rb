class JobSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :level, :salary, :featured, :languages, :contract, :posted_at

  has_many :companies
end
