# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u = User.create(name: ENV['USER'])


Song.destroy_all

song1 = Song.create(user: u, title: "Hotline Bling", artist: "Drake", genre: "Pop")
song2 = Song.create(user: u, title: "Controlla", artist: "Drake", genre: "Pop")
song3 = Song.create(user: u, title: "Sorry", artist: "Justin Bieber", genre: "Pop")
song4 = Song.create(user: u, title: "Despacito", artist: "Luis Ponsi ft Daddy Yankee", genre: "Latin Pop")
song5 = Song.create(user: u, title: "HUMBLE", artist: "Kendrick Lamar", genre: "Hip Hop")

Playlist.destroy_all

p1 = Playlist.create(user: u, name: "Drake Hits", songs:[song1,song2])
p2 = Playlist.create(user: u, name: "Top 40 2017", songs:[song1,song3,song4,song5])
