import React from "react";
import Album from "./components/Album";
import AlbumList from "./components/AlbumList";

export default function App() {
  const [chosenAlbum, setAlbum] = React.useState(0);
  return (
    <>
      <Album id={chosenAlbum} />
      <AlbumList chosenAlbum={chosenAlbum} setAlbum={setAlbum} />
    </>
  );
}