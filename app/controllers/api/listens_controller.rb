module Api
  class ListensController < ApiController
    def create
      @listen = current_user.listens.new(listen_params)
      if @listen.save
        render json: @listen
      else
        render json: @listen.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @listens = current_user.listens.includes(:song).order(created_at: :desc)
    end

    private
      def listen_params
        params.require(:listen).permit(:song_id)
      end
  end
end
