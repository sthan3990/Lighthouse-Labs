const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};


const printPlaylists = () => {

  for (let key in library.playlists) {

    let playlistName = library.playlists[key].name;
    let numSongs = library.playlists[key].tracks.length;

    console.log(`Playlist ${playlistName} has ${numSongs} songs`);

  }
}

const printPlaylist = (playListID) => {
  for (let key in library.playlists){

    key === playListID ? console.log(`Present Songs: ${library.playlists[key].tracks}`) : 0;
  }
}

  
const printTracks = () => {

  for (let key in library.tracks) {

     
    let trackName = library.tracks[key].name;
    let trackArtist = library.tracks[key].artist;
    let trackAlbum = library.tracks[key].album;

    console.log(`The song ${trackName} was written by ${trackArtist} and in the album ${trackAlbum}`);

  }
}


const grabNextKey = (currentKey,type) => {
  let nextKey = 0;

  currentKey < 10 ? nextKey = type+'0'+eval(currentKey + 1) : nextKey = type+eval(currentKey + 1);

  return nextKey;
 
}

  

const addPlaylist = (playlistName, playlistTracks) => {

  let currentKey = Object.keys(library.playlists).length;

  let nextKey = grabNextKey(currentKey,`t`);

  let obj = {id: nextKey, name: playlistName, tracks: playlistTracks};
  
  library.playlists[nextKey] = obj;

  // let playlistName2 = library.playlists[nextKey].name;
  // let numSongs = library.playlists[nextKey].tracks.length + 1;

  // console.log(`Playlist ${playlistName2} has ${numSongs} songs`);

   

}

const addTrack = (songName, songArtist, songAlbum) => {

  // increment the console log key 
  let currentKey = Object.keys(library.tracks).length;
  let nextKey = grabNextKey(currentKey,`t`);

  let obj = {id: nextKey, name: songName, artist: songArtist, album: songAlbum};
  
  library.tracks[nextKey] = obj;

  // let trackName = library.tracks[nextKey].name;
  // let trackArtist = library.tracks[nextKey].artist;
  // let trackAlbum = library.tracks[nextKey].album;

  // console.log(`The song ${trackName} was written by ${trackArtist} and in the album ${trackAlbum}`);

}

const addTrackToPlaylist = (playListID, songsToAdd) =>
{
  for (let key in library.playlists){
    //console.log(key);
    // console.log(playListID);

    key === playListID ? library.playlists[key].tracks += `,`+songsToAdd : console.log(`The playlist ID ${playListID} could not be found`);
  }
 
  }

printPlaylists();
printTracks();
printPlaylist('p01');
addTrackToPlaylist('p030', ['t05,t04,t02']);
addTrack('Me, You and Jesus', 'Lainey Wilson', 'Bell Bottom Country');
addPlaylist('Driving Music', [`t04`,`t01`,`t02`]);
