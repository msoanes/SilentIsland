module Api
  class SubscriptionsController < ApiController
    def create
      @subscription = current_user.subscribeds.new(subscription_params)
      if @subscription.save
        render json: @subscription
      else
        render json: @subscription.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @subscription = current_subscription
      @subscription.destroy
      render json: {}
    end

    private
      def current_subscription
        @current_subscription || Subscription.find(params[:id])
      end

      def subscription_params
        params
          .require(:subscription)
          .permit(:subscribable_id, :subscribable_type)
      end

      def require_subscription_owner!
        unless current_subscription.user_id == current_user.id
          render json: ['You cannot unsubscribe someone else'], status: :unauthorized
        end
      end
  end
end
