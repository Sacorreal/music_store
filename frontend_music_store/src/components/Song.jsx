
function Song(props) {
  const song = props.song
  return (
    <div className="card" style={{ width: "20rem" }}>
  <img src={song.cover} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{song.name}</h5>
    <p className="card-text">
     {song.time}
    </p>
    <ul>
        Artista<li>{song.artist}</li>
        <li>{song.album}</li>
    </ul>
    <audio src={song.url} type= "audio/mp3" controls >

    </audio>
   

    <a href="#" className="btn btn-primary">
      Escuchar
    </a>
  </div>
</div>

  );
}

export default Song;

