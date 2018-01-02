class Song {

  constructor(data){
  this.id = data.id
  this.title = data.title
  this.artist = data.artist
  this.genre = data.genre
  Song.all.push(this)
  }

};

Song.all = []
