class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    @photo = @comment.photo
    render 'api/photos/show'
  end


  private

  def comment_params
    params.require(:comment).permit(:photo_id, :body)
  end
end
