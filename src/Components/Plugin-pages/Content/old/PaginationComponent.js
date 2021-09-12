import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import './ReactPaginate.css';
// import StarRate from './Components/StartRate';
// import ColorsVariety from './Components/ColorsVariety';

export default function PaginationComponent(props) {
    // const productJson = props.images 
    // console.log("productJson : ",productJson)
    const [users, setUsers] = useState([props.images]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 3 
    const pagesVisited = pageNumber * usersPerPage

    console.log(" . . . . . . . .", users)
    function DisplayUsers() { 
        console.log('calling function . . . .', users)
        return(
            <div>
                {
                    users.slice(pagesVisited, pagesVisited + usersPerPage).map((im) => {
                        console.log('working . . . new . . . .')
                        return (
                            <div> <h1>hai hello world</h1></div>
                        );
                    })
                }
            </div>
        );
    }
    
    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <div>
            <DisplayUsers/>
            {/* <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            /> */}
        </div>
    )
}





                    // <div className={props.searchProduct==="books" ? "product-content-image books":"product-content-image"}>
                    //     <div className={props.searchProduct==="books" ? "" : "image-div"}>
                    //     <img 
                    //         src={im.productImagePath || im.book_image || im.name} 
                    //         className={im.book_image? "productImage-books" : "productImage"}
                    //         alt="products" key={im.id}
                    //         loading="lazy"
                    //     /></div>

                    //     <div className="productNameAndRupee">
                    //         <div className="productNameVSpriceDiv">
                    //             <div className="productName"><b>{im.title || im.productName}</b></div>
                    //             <div className="rank"><b>{im.rank? "Rank : " : ""}</b>{im.rank}</div>
                    //             <StarRate starRate={im.starRate || 4}/>
                    //         </div>
                    //         <div className="rupees">
                    //             {im.price || im.onlineSellingPrice || im.Rs} $
                    //             <div className="offerPrice" style={im.onlineSellingPrice?{display: "none"}: {}}>100 $</div>
                    //         </div>
                    //     </div>
                    //     {props.searchProduct === 'shoes' ? 
                    //         <ColorsVariety
                    //         colorsTitle={im.colors.colorsTitle}
                    //         colorvariety={im.colors.colorvariety}
                    //         /> : ''}
                    //     {im.author?<div className="productDescription"><b>Author : </b>{im.author}</div> : <div/>}
                    //     <div className="productDescription">{im.productLongDescription}</div>
                    //     <button className="buynow">{im.buynow ? im.buynow : "BUY NOW" }</button>
                    // </div>