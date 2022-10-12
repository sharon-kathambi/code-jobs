class JobsController < ApplicationController
    def index 
        jobs = Job.all
        render json: jobs
    end

    def show
        job = Job.find_by(id: params[:id])
        if job
            render json: job
        else
            render json: {error: 'job not found'}, status: :not_found
        end
    end
end
