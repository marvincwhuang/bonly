class ApplicationController < ActionController::Base
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
end
