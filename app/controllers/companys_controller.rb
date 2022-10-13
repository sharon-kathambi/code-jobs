class CompanysController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    def index
        companys = Company.all
        render json: companys
    end

    def show
        company = Company.find_by(id: session[:company_id])
        if company
            render json: company
        else
            render json: { error: 'Not authorized'}, status: :unauthorized
        end
    end

    def render_not_found
        render json: {error: 'company not found'}, status: :not_found
    end
end
