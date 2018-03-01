document.addEventListener('DOMContentLoaded', function(event) {
  Adapter.getSongs()
  Adapter.getPlaylists()

  document.getElementById("song-bar").addEventListener("click", event => {
      let mySong = Song.all.find(n => n.id === parseInt(event.path[1].id))
      if (event.target.id === `delete${mySong.id}`) {
        mySong.delete()
      } else {
      document.getElementById('song-title').value = mySong.title
      document.getElementById('song-artist').value = mySong.artist
      document.getElementById('song-genre').value = mySong.genre

      // NOW changes the dataset.id to tell me it is an EDIT form!
      // document.getElementById('edit').dataset.id = myNote.id
    }});


    document.getElementById("song-form").addEventListener("click", event =>{




      
    })


  document.querySelector('#playlist').style.visibility = "hidden";
  // document.querySelector('#song').style.visibility = "hidden";
  // //
  // // let newPlaylist = document.querySelector('#create-playlist')
  // let newSong = document.querySelector('#create-song')
  // // newPlaylist.addEventListener('click',createPlaylist)
  // newSong.addEventListener('click',createSong)
  // //
  // // function createPlaylist(){
  // //   document.querySelector('#playlist').style.visibility = "initial";
  // //   document.querySelector('#song').style.visibility = "hidden";
  // //
  // // }
  // //
  // function createSong(){
  //   document.querySelector('#song').style.visibility = "initial";
  //   document.querySelector('#playlist').style.visibility = "hidden";
  //
  // }
  //



  //
  //
  //
  // Adapter.getSongs()
  //
  // Adapter.getPlaylists()
  //


});
