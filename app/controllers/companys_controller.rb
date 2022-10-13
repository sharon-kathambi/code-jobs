class CompanysController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    def index
        companys = Company.all
        render json: companys
    end

    def show
        company = Company.find(session[:company_id])
        render json: company
    end

    private

    def render_not_found
        render json: {error: 'company not found'}, status: :not_found
    end
end
