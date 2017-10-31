class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end

  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    # @user = @follow.follower
    # render 'api/users/show'
    render :show
  end


  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
