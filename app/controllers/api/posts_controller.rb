class Api::PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :find_post, only: [:show, :update, :destroy]

  def index
    render json: Post.all.order("id DESC")
  end

  def show
    render json: @post
  end

  def create
    @post = Post.create(post_params)

    if @post.save
      render status: 200, json: {
        message: "succesfully created a post",
        post: @post
      }.to_json
    else
      render status: 422, json: {
        message: @post.errors
      }.to_json
    end
  end

  def update
    if @post.update(post_params)
      render status: 200, json: {
        message: "succesfully updated the post",
        post: @post
      }.to_json
    else
      render status: 200, json: {
        message: "failed to update post",
        post: @post
      }.to_json
    end
  end

  def destroy
    @post.destroy
    render status: 200, json: {
      message: "post deleted"
    }.to_json
  end

  private
    def post_params
      params.require(:post).permit(:title, :details)
    end

    def find_post
      @post = Post.find(params[:id])
    end
end
