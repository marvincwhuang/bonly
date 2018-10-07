class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favorite_posts # just the 'relationships'
  has_many :favorites, through: :favorite_posts, source: :post # the actual posts a user favorites
end
