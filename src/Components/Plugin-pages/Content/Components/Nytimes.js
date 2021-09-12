import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Content.css'
import Product from '../Product.json'




export default function Nytimes(){
    //const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kwIW3S2ch3Ur3wW3ndPuYWfpCZLkonmB`
    //const url = `http://storefrontapi.youcloudpay.com/api/Product/ProductGet`;
    const url = `https://json.extendsclass.com/bin/2508dcc3470a`;
    const [images, setImages] = useState([]);

    const getImages = () => {
      axios.get(url).then(res=>{
        console.log("responce : data",res.data.responseData);
        setImages(res.data.responseData);
      })
    }
    useEffect(()=>{
      getImages();
    },[])

    return(
        <div className="Content-Container">
            <div className="content">
                <div className="productConstant">
                    <div className="productTittle">
                        <h1>EXPLORE<br/>THE ORIGINAL BRANDS</h1>
                        <h4>SUMMER COLLECTION 2021</h4>
                        <button className="discoverButton">DISCOVER</button>
                    </div>
                    <div className="productImageConstant">
                        <img src={Product.constantImage.name || images.productImagePath} className="ProductConstantImage" key={Product.constantImage.id} alt="ProductImage"/>
                    </div>
                </div>
                <div className="product-container">
                    {
                        images.map((im)=>{
                            return(
                                <div className="product-content-image">
                                    <img src={im.productImagePath} className="productImage" alt="products" key={im.id}/><br/>
                                    <div className="productNameAndRupee">
                                        <div className="">
                                            <div className="productName">{im.title || im.productName}</div>
                                            <div>{im.rank}</div>
                                        </div>
                                        <div className="rupees">{im.price || im.onlineSellingPrice || im.Rs} $</div>
                                    </div>
                                    <div className="productDescription">{im.productLongDescription}</div>
                                    <button className="buynow">{im.buynow}BUY NOW</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}


































    // useEffect(()=>{
    //     fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kwIW3S2ch3Ur3wW3ndPuYWfpCZLkonmB')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    // })

    // return(
    //     <div className="Content-Container">
    //         <div className="content">
    //             <div className="grid-container"> 
    //                 {/* {
    //                     images.map((bks) =>{
    //                         return(
    //                             <div className="grid">
    //                             <img src={bks.book_image} alt="no image" className="grid-image" />
    //                                 <div className="author">{bks.author}</div>
    //                             </div>
    //                         );
    //                     })
    //                 } */}
    //             </div>
    //         </div>
    //     </div>
    // );