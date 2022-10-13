class JobsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index 
        jobs = Job.all
        render json: jobs
    end

    def show
        job = Job.find(params[:id])
        render json: job
    end

    
    private
    def render_not_found
        render json: {error: 'job not found'}, status: :not_found
    end

end
