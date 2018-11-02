class Post < ApplicationRecord
	has_many_attached :images
	has_many :favorite_posts # just the 'relationships'
	has_many :favorited_by, through: :favorite_posts, source: :user # the actual users favoriting a post
  validates :title, presence: true
  validates :content, presence: true
  validates :images, presence: true

	# def large input
	#     return self.images[input].variant(resize: '450x600^').processed
	# end

	def medium input
	    return self.images[input].variant(resize: '300x400^').processed
	end

	# def small input
	#     return self.images[input].variant(resize: '45x60^').processed
	# end
end
