class SessionsController < ApplicationController
   def create
     company = Company.find_by(name: params[:name])
     if company&.authenticate(params[:password])
      session[:company_id] = company.id 
      render json: company, status: :created
  else
      render json: { error: "Invalid username or password" }, status: :unauthorized
  end 
   end

   def destroy
    session.delete :company_id
    head :no_content
    end
end
