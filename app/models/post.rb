class Post < ApplicationRecord
	has_many_attached :images

	def large input
	    return self.images[input].variant(resize: '450x600!').processed
	end

	def medium input
	    return self.images[input].variant(resize: '300x400!').processed
	end

	def small input
	    return self.images[input].variant(resize: '45x60!').processed
	end
end
