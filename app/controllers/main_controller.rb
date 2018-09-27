class MainController < ApplicationController
	def index
		@post = Post.all.order(created_at: :desc).limit(3)
	end
end
