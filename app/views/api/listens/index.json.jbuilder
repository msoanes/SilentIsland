json.models @listens, partial: 'listen', as: :listen
json.page (params[:page] || '1').to_i
json.total_pages @listens.total_pages
