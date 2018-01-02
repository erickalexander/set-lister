class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :genre
  belongs_to :user
  has_many :playlists

end
