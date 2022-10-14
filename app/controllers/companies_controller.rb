class CompaniesController < ApplicationController
    def index
             companys = Company.all
            render json: companys
         end
    def create
        company = Company.create(company_params)
        if company.valid?
            session[:company_id] = company.id
          render json: company, status: :created
        else
          render json: { errors: company.errors.full_messages }, status: :unprocessable_entity
        end  
    end

    def show
        company = Company.find_by(id: session[:company_id])
        if company
            render json: company
        else
            render json: {error: 'Not authorized'}, status: :unauthorized
        end
    end

    private
    def company_params
        params.permit(:name, :password, :password_confirmation)
      end

   # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
   # def index
   #     companys = Company.all
   #     render json: companys
    #end

    #def show
    #    company = Company.find(session[:company_id])
    #    render json: company
    #end

    #private

    #def render_not_found
    #    render json: {error: 'company not found'}, status: :not_found
    #end
end
