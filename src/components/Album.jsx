import Cover from "./Cover";
import Tracklist from "./Tracklist";
import albums from "../data/data";

export default function Album({id}) {
    return (
        <section>
            <Cover
                image={albums[id].coverImg}
                name={albums[id].name} 
            />
            <Tracklist 
                tracks={albums[id].tracks} 
            />
        </section>
    );
}