class RectruiterSerializer < ActiveModel::Serializer
  attributes :id, name, :image, :company_id, :job_id

  belongs_to :job
  belongs_to :company
end
