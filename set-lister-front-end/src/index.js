document.addEventListener('DOMContentLoaded', function(event) {
  Adapter.getSongs()
  Adapter.getPlaylists()

  document.querySelector('#playlist').style.visibility = "hidden";
  document.querySelector('#song').style.visibility = "hidden";

  let newPlaylist = document.querySelector('#create-playlist')
  let newSong = document.querySelector('#create-song')
  let newP = newPlaylist.addEventListener('click',createPlaylist)
  let newS = newSong.addEventListener('click',createSong)

  function createPlaylist(){
    document.querySelector('#playlist').style.visibility = "initial";
    document.querySelector('#song').style.visibility = "hidden";

  }

  function createSong(){
    document.querySelector('#song').style.visibility = "initial";
    document.querySelector('#playlist').style.visibility = "hidden";

  }
  //
  //
  //
  // Adapter.getSongs()
  //
  // Adapter.getPlaylists()
  //


});
