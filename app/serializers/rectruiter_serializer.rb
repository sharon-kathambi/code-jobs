class RectruiterSerializer < ActiveModel::Serializer
  attributes :id, name, :image, :company_id, :job_id
end