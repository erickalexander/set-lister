class Adapter{
  static getSongs(){
    fetch('http://localhost:3000/api/v1/users/1')
	   .then(response => response.json())
	   .then(json => this.createSongs(json))
     .then(song => this.displaySongs())
  }
  static createSongs(json) {
      json.songs.forEach(song => new Song(song))
  }

  static displaySongs(){
    let songBar = document.querySelector('#song-bar')
    songBar.style = 'border: 5px'
    // songBar.innerHTML = `<div id="main"> <h1 id ='h1-main'>Songs</h1> <button id="create-song" style="background-color: #00ac77">+</button> </div>`
        Song.all.forEach(function(song){
          songBar.innerHTML += `
            <div id="${song.id}" style="border-style: solid; border-width: 2px; padding: 20px">
            <h4>Title: ${song.title}</h4>
            <h4>Artist: ${song.artist}</h4>
            <h4>Genre: ${song.genre}</h4>
            <button class='btn-danger' id="delete${song.id}">Delete Song</button>
            </div>
          `
    })
  }

  static getPlaylists(){
    fetch('http://localhost:3000/api/v1/playlists')
    .then(response => response.json())
    .then(json => this.createPlaylists(json))
    .then(song => this.displayPlaylists())

  }

  static createPlaylists(json) {
      json.forEach(playlist => new Playlist(playlist))
  }

  static displayPlaylists(){
    let playlistBar = document.querySelector('#playlist-bar')
    let singleP = document.querySelector('#single-playlist')
    singleP.style = "border-style: solid; border-width: 2px; padding: 20px"
    // playlistBar.innerHTML = `<div id="main"> <h1 id ='h1-main'>Playlists</h1> <button id="create-playlist" style="background-color: #00ac77">+</button> </div>`
        Playlist.all.forEach(function(playlist){
          let newDiv = document.createElement("DIV")
          newDiv.innerHTML += `
            <div id="${playlist.id}">
            <h4>Name: ${playlist.name}</h4>
            </div>
          `
          singleP.appendChild(newDiv)
          playlist.songs.forEach(song => {
            let songList = document.createElement("UL")
            songList.innerHTML = `<li> ${song.title} </li> `
            singleP.appendChild(songList)
          })

          singleP.innerHTML += `<button class='btn-danger' id="delete${playlist.id}">Delete Playlist</button>`
          playlistBar.appendChild(singleP)
    })
  }



}
