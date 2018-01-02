class Playlist {

  constructor(data){
  this.id = data.id
  this.name = data.name
  this.songs = data.songs
  Playlist.all.push(this)
  }

};

Playlist.all = []
