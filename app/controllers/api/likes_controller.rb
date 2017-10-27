class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.liker_id = currentUser.id
    @like.save
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
  end

  private
  def like_params
    params.require(:like).permit(:photo_id)
  end
end
