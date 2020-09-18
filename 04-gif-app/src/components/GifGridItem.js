import React from 'react'

export const GifGridItem = ( {img}  ) => {
        
    return (
        <div className="card animate__fadeIn">
            <div className="img-div ">
                <img className="gif-img" src={img.img} alt={img.title} />
            </div>
            <p className="img-title">{img.title}</p>
        </div>
    )
} 