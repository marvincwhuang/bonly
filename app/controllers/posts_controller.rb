class PostsController < ApplicationController
	before_action :authenticate_user!, except: [ :show, :index ]
	before_action :authenticate_admin!, only: [ :new, :create, :edit, :update, :destroy]
	before_action :find_post, only: [ :show, :edit, :update, :destroy, :favorite ]

	def index
		@post = Post.all.order(created_at: :desc)
	end

	def show
	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.new(post_params)

		if @post.save
			redirect_to @post
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @post.update(post_params)
			redirect_to @post
		else
			render 'edit'
		end
	end

	def destroy
		@post.destroy
		redirect_to posts_path
	end

	private

	def find_post
		@post = Post.find(params[:id])
	end

	def post_params
		params.require(:post).permit(:title, :content, images: [])
	end

	def authenticate_admin!
	    redirect_to root_path unless current_user.admin
	end
end
