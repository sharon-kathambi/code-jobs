class RecruitersController < ApplicationController
    def index
        recruiter = Rectruiter.all
        render json: recruiter
    end

end
