import React, {useState } from 'react';
import AddCategory from './components/AddCategory';
import  GifGrid from './components/GifGrid';

const GifExpertApp = () =>{
    
    const [categories, setCategories] = useState( [])

    // const handleAdd = () => {
    //     setCategories([...categories, "Shingeki"])
    // }
    return (
        <>
            <h2>Search anything!</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ol className="ol-item">
                {
                    categories.map( (category) => {
                        return <GifGrid category = {category} key={category} />
                    })
                }
            </ol>
        </> 
    )
}

export default GifExpertApp