import React from 'react'
import PhotoAlbum from "react-photo-album";
import {fox, hayat, kaito, Katsuya, Katsuya2, medusa, sabaa, shiro} from "../assets/images";

const photos = [
    { src: fox, width: 1400, height: 2000 },
    { src: hayat, width: 1400, height: 2000 },
    { src: kaito, width: 1400, height: 2000 },
    { src: Katsuya, width: 1400, height: 2000 },
    { src: Katsuya2, width: 1400, height: 2000 },
    { src: medusa, width: 1400, height: 2000 },
    { src: shiro, width: 1400, height: 2000 },
    { src: sabaa, width: 1400, height: 1400 },



  ];

  export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
  }


  
