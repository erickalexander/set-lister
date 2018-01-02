class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :songs
  has_many :playlists
end
