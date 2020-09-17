import React from 'react';

const GifExpertApp = () =>{
    const categories = ['One punch', 'Dragon Ball', 'Samurai X']

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>
            {
                categories.map( (category) => {
                    return <li key= {category}>{category}</li>
                })
            }
        </> 
    )
}

export default GifExpertApp