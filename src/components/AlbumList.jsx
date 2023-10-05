import albums from "../data/data";

export default function AlbumList({ chosenAlbum, setAlbum }) {
    return (
        <section>
            <h1>Select an Album</h1>
            <ul className="album-list">
                {
                    albums.map(album => {
                        return (
                            <li key={album.id} classname="list-item">
                                <span onClick={() => setAlbum(album.id)}>
                                    <img 
                                        className="small-cover-photo"
                                        src={album.coverImg} 
                                        alt={`${album.name} album cover photo`}
                                    />
                                    {chosenAlbum == album.id
                                        ? <span className="list-text" style={{fontWeight:700}}>{album.name}</span>
                                        : <span className="list-text">{album.name}</span>
                                    }
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}