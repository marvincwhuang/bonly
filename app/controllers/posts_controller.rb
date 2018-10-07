class PostsController < ApplicationController
	before_action :authenticate_user! 
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
		redirect_to root_path
	end

	# Add and remove favorite postss
	# for current_user
	def favorite
		type = params[:type]
		if type == "favorite"
			if !@post.favorited_by.ids.include? current_user.id # check if current user has already favorite the post 
			current_user.favorites << @post
			redirect_back fallback_location: root_path, notice: "You favorited #{@post.title}"
		end
		elsif type == "unfavorite"
			current_user.favorites.delete(@post)
			redirect_back fallback_location: root_path, notice: "Unfavorited #{@post.title}"
		else
			# Type missing, nothing happens
			redirect_back fallback_location: root_path, notice: 'Nothing happened.'
		end
	end


	private

	def find_post
		@post = Post.find(params[:id])
	end
    
	def post_params
		params.require(:post).permit(:title, :content, images: [])
	end
end