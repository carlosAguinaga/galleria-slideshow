import React from "react";
import CardItem from "./CardItem";
import '../styles/Gallery.css';

const items = [
  {
    image: "https://picsum.photos/200/350",
    title: 'Titulo1 is simply dummy text of the printing',
    subtitle: 'Subtitle1'
  },
  {
    image: "https://picsum.photos/420/670",
    title: 'Titulo2',
    subtitle: 'Subtitle2'
  },
  {
    image: "https://picsum.photos/360/500",
    title: 'Titulo3',
    subtitle: 'Subtitle3'
  },
  {
    image: "https://picsum.photos/200/500",
    title: 'Titulo4',
    subtitle: 'Subtitle4'
  },
  {
    image: "https://picsum.photos/600/600",
    title: 'Titulo5',
    subtitle: 'Subtitle5'
  },
  {
    image: "https://picsum.photos/200/200",
    title: 'Titulo6',
    subtitle: 'Subtitle6'
  },
  {
    image: "https://picsum.photos/530/400",
    title: 'Titulo7',
    subtitle: 'Subtitle7'
  },
  {
    image: "https://picsum.photos/310/420",
    title: 'Titulo8',
    subtitle: 'Subtitle8'
  },
  {
    image: "https://picsum.photos/300/700",
    title: 'Titulo9',
    subtitle: 'Subtitle9'
  },
  {
    image: "https://picsum.photos/326/400",
    title: 'Titulo10',
    subtitle: 'Subtitle10'
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
