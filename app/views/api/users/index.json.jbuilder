json.models @users, partial: 'user', as: :user
json.page (params[:page] || '1').to_i
json.total_pages @users.total_pages
