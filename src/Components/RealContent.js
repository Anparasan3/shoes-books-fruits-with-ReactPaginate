import React, {useState} from 'react'
import StarRate from './SubComponent/StarRate'
import Colors from './SubComponent/Colors.js'
import ImageComponent from './SubComponent/ImageComonent.js'
import './Style/RealContent.css'
import './Style/RealContentBook.css'

export default function RealContent(props) {
    const { items } = props;
    
    let a = ''
    const testting = items.slice(0,1);
    if (testting[0]?.book_image_height > testting[0]?.book_image_width){
        a = 'books';
    }

    const [Update, SetUpdate] = useState({
        cardNo : 0,
        imgNo  : 0
    });

    return (
        <>
            <div className = {a === 'books' ? "books-container" : "product-container"}>
                {
                    items.map((im, index) => {
                        return (
                            <div className = {a === 'books' ? "books-content" : "product-content-image"}>
                                <div className = {im.book_image ? "" : "image-div"}>
                                    <ImageComponent 
                                        images={im.images} Update={Update} index={index}
                                        classNames = {im.book_image ? "productImage-books" : "productImage"}
                                    />
                                </div>
                                    <div className = "cardSecondBox">
                                    <div className = "productNameAndRupee">
                                        <li className = {a === 'books' ? 'booksName':"productName"}><b>{im.title || im.productName}</b></li>
                                        <li className = {a === 'books' ? 'bookMoney':"rupees"}> {im.price || im.onlineSellingPrice || im.Rs || im.sellingPrize || im.sellingPrice} </li>
                                    </div>
                                    <div className = "productNameAndRupee">
                                        <StarRate 
                                            starRate = {
                                                im.starRate || 
                                                im.startRating || 
                                                (props.q === 'books' || 'fruits' ? 4 : 0)
                                            } 
                                        />
                                        {a === 'books' ? <div /> : <div className = "offerPrice">{im.actualPrize || im.mrp}</div>}
                                    </div>
                                    {im.rank   ? <div className = "rank">Rank : {im.rank}</div> : ''}
                                    {im.colors ? 
                                        <Colors 
                                            colorsTitle = {im.colors.colorsTitle || im.colorTitle} 
                                            colors={im.colors} 
                                            Update={Update} 
                                            SetUpdate={SetUpdate} 
                                            index={index}
                                        /> : ''
                                    }
                                    {im.author ? <div className = "author">Author : {im.author}</div> : <div />}

                                    <div className = "productDescription">{im.productLongDescription || im.productDescription}</div>
                                    <div className = "buynowDiv">
                                        <a href={im.cta?.addToCartURL}>
                                        <button className = "buynow" style={{backgroundColor: im.cta?.buttonColor?.code?.hex}}>
                                            {im.buynow ? im.buynow : "ADD TO CARD"}
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div> 
        </>
    )
}
