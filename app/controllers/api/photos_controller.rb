class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)

    @photo.user_id = current_user.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.includes(:comments).find(params[:id])
    render :show
  end

  def like
    @photo = Photo.find(params[:id])
    like = @photo.likes.new(liker_id: current_user.id)
    if like.save
      render :show
    else
      render json: like.errors.full_messages, status: 422
    end
  end

  def unlike
    @photo = Photo.find(params[:id])
    like = Like.find_by(photo_id: @photo.id, liker_id: current_user.id)
    like.destroy
    render :show
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy

    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:location, :caption, :image)
  end
end
