import React, { useState, useEffect } from 'react';

import './Content.css';
import axios from 'axios';
import ConstantProduct from './Components/ConstantProduct.js';
import PaginateComponent from './PaginateComponent';

export default function Content(props){
    const [images, setImages] = useState([]);
    const [imagesDefault, setImagesDefault] = useState([]);

    useEffect( () => {
        axios.get(props.url).then(res => {
            if (props.searchProduct === 'shoes'){
                console.log(res.data);
                setImagesDefault(res.data.constantImage)
                setImages(res.data.image)
            } else if(props.searchProduct === 'fruits'){
                console.log(res)
                setImagesDefault('https://freepngimg.com/thumb/fruit/4-2-fruit-png-image.png')
                setImages(res.data.responseData)
            } else if(props.searchProduct === 'books') {
                console.log(res.data.results.books)
                setImages(res.data.results.books)
                setImagesDefault(`https://www.animatedimages.org/data/media/53/animated-book-image-0032.gif`)
            }
        })
    },[props])
    
    return(
        <div className="Content-Container">
            <div className="content">
                <ConstantProduct 
                    imagesDefault={imagesDefault}
                    images={images}
                />
                {/* <div className={props.searchProduct==="books" ? "product-container bookscoloumns":"product-container"}> */}
                    <PaginateComponent images={images} searchProduct={props.searchProduct}/>
                {/* </div> */}
            </div>
        </div> 
    );
}

