import React from 'react'
import StarRate from './SubComponent/StarRate'
import ColorsVariety from './SubComponent/ColorsVariety'
import './Style/RealContent.css'
import './Style/RealContentBook.css'

export default function RealContent(props) {
    const { items } = props;
    
    let a = ''
    const testting = items.slice(0,1);
    if (testting[0]?.book_image_height > testting[0]?.book_image_width){
        a = 'books';
    }

    return (
        <>
            <div className = {a === 'books' ? "books-container" : "product-container"}>
                {
                    items.map((im) => {
                        return (
                            <div className = {a === 'books' ? "books-content" : "product-content-image"}>
                                <div className = {im.book_image ? "" : "image-div"}>
                                    <img
                                        src = {im.url || im.book_image || im.name || im.productImagePath || im.images[0]}
                                        className = {im.book_image ? "productImage-books" : "productImage"}
                                        alt = "products" 
                                        key={im.id}
                                        onError = {(e)=>{
                                            e.target.onerror = null; 
                                            e.target.src="https://2.bp.blogspot.com/-m_ZWnDKS-Nw/XOauDQpO6-I/AAAAAAAzF0E/F-OPcHmjt-o2TWAKjNUL8SNRAAfpIcEgwCLcBGAs/s1600/AW3876169_00.gif"
                                        }}
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
                                        <ColorsVariety 
                                            colorsTitle = {im.colors.colorsTitle || im.colorTitle} 
                                            colorvariety = {im.colors.colorvariety || im.colors} 
                                        /> : ''
                                    }
                                    {im.author ? <div className = "author">Author : {im.author}</div> : <div />}

                                    <div className = "productDescription">{im.productLongDescription || im.productDescription}</div>
                                    <div className = "buynowDiv">
                                        <button className = "buynow">
                                            {im.buynow ? im.buynow : "BUY NOW"}
                                        </button>
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
