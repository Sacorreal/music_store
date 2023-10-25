
function Song(props) {
  const song = props.song
  return (
    <div className="card" style={{ width: "20rem" }}>
  <img src={song.cover} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{song.name} - {song.genre}</h5>
    <p className="card-text">
     {song.duration}
    </p>

        Artista - {song.strArtist}<br/>
        Album -{song.strAlbum}
    
    <audio className="card-text mt-3" src={song.url} type= "audio/mp3" controls >

    </audio>  
  </div>
</div>

  );
}

export default Song;

