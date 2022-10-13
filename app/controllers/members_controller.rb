class MembersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
     before_action :authorize

  def index
    jobs = Job.where(is_member_only: true).includes(:company).order(created_at: :desc)
    render json: jobs
  end

  def show
    job = Job.find(params[:id])
    render json: job, include: :company
  end

  def create
    job = Job.create!(job_params)
    render json: job, status: :created

end

def update
    job = Job.find(params[:id])
    job.update!(job_params)
    render json: job, status: :accepted
end

def destroy
    job = Job.find(params[:id])
    job.destroy
    head :no_content
end

private
def render_not_found
    render json: {error: 'job not found'}, status: :not_found
end

def job_params
    params.permit(:name, :location, :level, :salary, :languages, :contract)
end

def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

def authorize
    return render json: {error: 'Not authorized'}, status: :unauthorized unless session.include? :user_id
  end

end
