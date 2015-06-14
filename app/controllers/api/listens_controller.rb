module Api
  class ListensController < ApiController
    def create
      @listen = Listen.new(listen_params)
      if @listen.save
        render json: @listen
      else
        render json: @listen.errors.full_messages, status: :unprocessable_entity
      end
    end

    private
      def listen_params
        params.require(:listen).permit(:song_id)
      end
  end
end
