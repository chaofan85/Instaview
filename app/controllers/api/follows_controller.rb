class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      # @user = @follow.follower
      # render 'api/users/show'
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
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
