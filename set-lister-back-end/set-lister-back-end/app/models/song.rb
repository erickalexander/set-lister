class Song < ApplicationRecord
  belongs_to :user, optional: true
  has_many :playlist_songs, :dependent => :destroy
  has_many :playlists, through: :playlist_songs
end
