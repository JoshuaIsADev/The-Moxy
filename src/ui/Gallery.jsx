function Gallery(room) {
  const { name, image } = room.room;

  return (
    <div>
      {name}
      <img src={image}></img>
    </div>
  );
}

export default Gallery;
