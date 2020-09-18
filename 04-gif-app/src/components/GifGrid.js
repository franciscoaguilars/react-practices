import React, {useEffect, useState} from 'react';
import { GifGridItem } from './GifGridItem';

const GifGrid = ( {category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=KnqrOs6orhs7p7WzbKTdNlZ8JhHtdAxJ&q=${category}&limit=5`
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(gif => {
            return {
                id: gif.id,
                img: gif.images.downsized_medium.url,
                title: gif.title,
            }
        })
        
        setImages(gifs)
    }


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            
                {
                    images.map(image => {
                      return <GifGridItem 
                      key={image.id}
                      img={image}/>
                    })
                }
            
             </div>
        </>
    )
}

export default GifGrid