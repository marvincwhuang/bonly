class MainController < ApplicationController
	def index
		@post = Post.all.order(created_at: :desc)
	end
end
