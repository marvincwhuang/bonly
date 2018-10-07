class FavoritePostsController < ApplicationController
	before_action :authenticate_user!
	def index
		@posts = current_user.favorites
	end

	def favorite
	  type = params[:type]
	  if type == "unfavorite"
	    current_user.favorites.delete(@post)
	    redirect_back fallback_location: root_path, notice: "Unfavorited #{@post.title}"

	  else
	    # Type missing, nothing happens
	    redirect_back fallback_location: root_path, notice: 'Nothing happened.'
	  end
	end
end
