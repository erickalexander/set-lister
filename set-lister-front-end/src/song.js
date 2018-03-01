class Song {

  constructor(data){
  this.id = data.id
  this.title = data.title
  this.artist = data.artist
  this.genre = data.genre
  Song.all.push(this)
  }

  delete(){
        fetch(`http://localhost:3000/api/v1/songs/${this.id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(resp => resp.json())
        .then(function(){
          document.getElementById(`${this.id}`).remove()
          console.log(`${this.id} deleted successfully`)
          Song.all.filter(x => x.id !== parseInt(this.id))
        }.bind(this))
      };


  addSong(){
    fetch(`http://localhost:3000/api/v1/songs/${this.id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify(data)})
    .then(resp => resp.json())
  }
};

Song.all = []
