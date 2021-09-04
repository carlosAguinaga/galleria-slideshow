import React from "react";
import CardItem from "./CardItem";
import '../styles/Gallery.css';

const items = [
  {
    image: "https://picsum.photos/200/350",
    title: 'titulo1',
    subtitle: 'subtitle1'
  },
  {
    image: "https://picsum.photos/420/170",
    title: 'titulo2',
    subtitle: 'subtitle2'
  },
  {
    image: "https://picsum.photos/360/600",
    title: 'titulo3',
    subtitle: 'subtitle3'
  },
  {
    image: "https://picsum.photos/200/500",
    title: 'titulo4',
    subtitle: 'subtitle4'
  },
  {
    image: "https://picsum.photos/600/600",
    title: 'titulo5',
    subtitle: 'subtitle5'
  },
  {
    image: "https://picsum.photos/200/200",
    title: 'titulo6',
    subtitle: 'subtitle6'
  },
  {
    image: "https://picsum.photos/530/400",
    title: 'titulo7',
    subtitle: 'subtitle7'
  },
  {
    image: "https://picsum.photos/310/420",
    title: 'titulo8',
    subtitle: 'subtitle8'
  },
  {
    image: "https://picsum.photos/300/700",
    title: 'titulo9',
    subtitle: 'subtitle9'
  },
  {
    image: "https://picsum.photos/326/400",
    title: 'titulo10',
    subtitle: 'subtitle10'
  },
];

const Gallery = () => {
  return (
    <div className='galleryContainer'>
      {items.map( (item) => <CardItem  {...item} key={item.title} />)}
    </div>
  );
};

export default Gallery;
