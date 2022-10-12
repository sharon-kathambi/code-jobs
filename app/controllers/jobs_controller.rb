class JobsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    def index 
        jobs = Job.all
        render json: jobs
    end

    def show
        job = Job.find_by(id: params[:id])
        render json: job
    end

    def create
        job = Job.create(job_params)
        render json: job, status: :created

    end

    def update
        job = Job.find_by(id: params[:id])
        job.update(job_params)
        render json: job, status: :accepted
    end

    def destroy
        job = Job.find_by(id: params[:id])
        job.destroy
        head :no_content
    end

    private
    def render_not_found
        render json: {error: 'job not found'}, status: :not_found
    end

    def job_params
        params.permit(:name, :location, :level :salary, :languages, :contract)
    end
end
