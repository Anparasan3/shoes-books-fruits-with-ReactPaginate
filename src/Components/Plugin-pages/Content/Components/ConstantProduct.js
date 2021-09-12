import React from 'react';
import '../Content.css';


export default function ConstantProduct(props) {
    
    return (
        <div className="productConstant">
            <div className="productTittle">
                <h1>EXPLORE<br />THE ORIGINAL BRANDS</h1>
                <h4>SUMMER COLLECTION 2021</h4>
                <button className="discoverButton">DISCOVER</button>
            </div>
            <div className="productImageConstant">
                <img src={props.imagesDefault.shoeImage || props.imagesDefault} className={props.imagesDefault.shoeImage ? "ProductConstantImage" : "ProductConstantImage-books"} alt="" />
            </div>
        </div>
    );
}



                            // `https://www.animatedimages.org/data/media/53/animated-book-image-0032.gif` :
                            // `https://freepngimg.com/thumb/fruit/4-2-fruit-png-image.png`}
                    // className={default_product === "books" ? "ProductConstantImage-books" : "ProductConstantImage"}
                    // key={Product.constantImage.id} alt="ProductImage"