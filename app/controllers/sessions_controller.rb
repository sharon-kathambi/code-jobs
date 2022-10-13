class SessionsController < ApplicationController
   def create
     company = Company.find_by(name: params[:name])
     session[:company_id] = company.id
     render json: company
   end
end
