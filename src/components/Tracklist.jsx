export default function Tracklist({tracks}) {
    return (

        <ol className="tracklist">
        {
            tracks.map(track => {
                return <li key={track}>{track}</li>
            })
        }
        </ol>
  
    );
}