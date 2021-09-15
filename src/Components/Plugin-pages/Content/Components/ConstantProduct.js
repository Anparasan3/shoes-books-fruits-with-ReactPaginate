import React from 'react';
import '../Content.css';

export default function ConstantProduct(props) {

    // const [imagesDefault, setImagesDefault] = useState();
    // if (props.searchProduct === 'shoes'){
    //     setImagesDefault(`https://i.pinimg.com/originals/88/45/ec/8845ecfd5c1a77c85a4f6ac19c45a907.png`)
    // } else if(props.searchProduct === 'fruits'){
    //     setImagesDefault('https://freepngimg.com/thumb/fruit/4-2-fruit-png-image.png')
    // } else if(props.searchProduct === 'books') {
    //     setImagesDefault(`https://www.animatedimages.org/data/media/53/animated-book-image-0032.gif`)
    // } else {
    //     console.log('other calls')
    // }

    return (
        <div className="productConstant">
            <div className="productTittle">
                <h1>EXPLORE<br />THE ORIGINAL BRANDS</h1>
                <h4>SUMMER COLLECTION 2021</h4>
                <button className="discoverButton">DISCOVER</button>
            </div>
            <div className="productImageConstant">
                <img 
                    src={props.searchProduct === "books" ?
                        'https://www.animatedimages.org/data/media/53/animated-book-image-0032.gif' :
                        (props.searchProduct === 'shoes' ?
                            'https://i.pinimg.com/originals/88/45/ec/8845ecfd5c1a77c85a4f6ac19c45a907.png' :
                            'https://freepngimg.com/thumb/fruit/4-2-fruit-png-image.png'
                        )}
                    className={props.searchProduct === 'books' ? "ProductConstantImage-books" : "ProductConstantImage"}
                    alt=""
                />
            </div>
        </div>
    );
}



// `https://www.animatedimages.org/data/media/53/animated-book-image-0032.gif` :
// `https://freepngimg.com/thumb/fruit/4-2-fruit-png-image.png`}
// className={default_product === "books" ? "ProductConstantImage-books" : "ProductConstantImage"}
// key={Product.constantImage.id} alt="ProductImage"