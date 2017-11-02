class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:photos).find_by(username: params[:username])
    render 'api/users/show.json.jbuilder'
  end

  def feeds
    @user = User.find(params[:id])

    @photos = @user.photos
    photos_of_people_i_follow = []
    @user.followings.includes(:photos).each do |following|
      following.photos.each do |photo|
        photos_of_people_i_follow << photo
      end
    end
    # debugger

    @photos += photos_of_people_i_follow

    render "api/photos/index.json.jbuilder"
  end

  def user_photos
    @user = User.includes(:photos).find_by(username: params[:username])
    # debugger
    @photos = @user.photos
    render "api/photos/index.json.jbuilder"
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow
    @user = User.find(params[:id])
    @follow = @user.followed.new(follower_id: current_user.id)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @user = User.find(params[:id])
    @follow = Follow.find_by(follower_id: current_user.id, followee_id: @user.id)
    @follow.destroy
    render :show
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :fullname, :password, :avatar)
  end

end
