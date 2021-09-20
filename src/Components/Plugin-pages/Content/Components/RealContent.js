import React from 'react'
import StarRate from './StartRate'
import ColorsVariety from './ColorsVariety'
import '../Content.css'

export default function RealContent(props) {

    // to change the mapping element
    const {items} = props;
    const {books} = props;
    let product;
    if(props.searchProduct==='books'){
        product = books
    } else {
        product = items
    }
    // . . . . . . . . . . . . . . .

    return (
        <>
            <div className={props.searchProduct==="books" ? "product-container bookscoloumns":"product-container"}>
                {
                    product.map((im) => {
                        return (
                            <div className={props.searchProduct === "books" ? "product-content-image books" : "product-content-image"}>
                                <div className={props.searchProduct === "books" ? "" : "image-div"}>
                                    <img
                                        src={im.productImagePath || im.book_image || im.name || im.url}
                                        className={im.book_image ? "productImage-books" : "productImage"}
                                        alt="products" key={im.id}
                                        // loading="lazy"
                                        onError={(e)=>{e.target.onerror = null; e.target.src="https://2.bp.blogspot.com/-m_ZWnDKS-Nw/XOauDQpO6-I/AAAAAAAzF0E/F-OPcHmjt-o2TWAKjNUL8SNRAAfpIcEgwCLcBGAs/s1600/AW3876169_00.gif"}}
                                    /></div>

                                <div  className="productNameAndRupee">
                                    <div className="productNameVSpriceDiv">
                                        <div className="productName"><b>{im.title || im.productName}</b></div>
                                        <div className="rank"><b>{im.rank ? "Rank : " : ""}</b>{im.rank}</div>
                                        <StarRate starRate={im.starRate || 4} />
                                    </div>
                                    <div className="rupees">
                                        {im.price || im.onlineSellingPrice || im.Rs} $
                                        <div className="offerPrice" style={im.onlineSellingPrice ? { display: "none" } : {}}>100 $</div>
                                    </div>
                                </div>
                                {props.searchProduct === 'shoes' ?
                                    <ColorsVariety
                                        colorsTitle={im.colors.colorsTitle}
                                        colorvariety={im.colors.colorvariety}
                                    /> : ''}
                                {im.author ? <div className="productDescription"><b>Author : </b>{im.author}</div> : <div />}
                                <div className="productDescription">{im.productLongDescription}</div>
                                <button className="buynow">{im.buynow ? im.buynow : "BUY NOW"}</button>
                            </div>
                        );
                    })
                }
            </div> 
        </>
    )
}


// loading gif - -> https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340
// https://www.commercialfridgerepairs.com.au/wp-content/uploads/2018/11/404-image.gif
// error image link
// https://static.thenounproject.com/png/482114-200.png
// http://cdn.onlinewebfonts.com/svg/img_307695.png
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OtiQ2Cf8le5lwwhTL1rqDepjVzFfxIGr6g6uibX0ZhMEISCNhpEifpsXAD7-AMXZ3Vs&usqp=CAU
