import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import StarRate from './Components/StartRate';
import ColorsVariety from './Components/ColorsVariety';
import './Content.css';

export default function PaginateComponent(props) {

    const [items, setItems] = useState([]);
    const searchProduct = props.searchProduct;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `http://localhost:3000/${searchProduct}?_page=1&_limit=6`
            );
            const data = await res.json();
            setItems(data);
        };
        getComments();
    }, [searchProduct])
    console.log(items);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `http://localhost:3000/${searchProduct}?_page=${currentPage}&_limit=6`
        )
        const data = await res.json();
        return data;
    }


    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1
        const commentsformserver = await fetchComments(currentPage);
        setItems(commentsformserver);
    }

    return (
        <>
            <div className={props.searchProduct==="books" ? "product-container bookscoloumns":"product-container"}>
            {
                items.map((im) => {
                    return (
                        <div className={props.searchProduct === "books" ? "product-content-image books" : "product-content-image"}>
                            <div className={props.searchProduct === "books" ? "" : "image-div"}>
                                <img
                                    src={im.productImagePath || im.book_image || im.name}
                                    className={im.book_image ? "productImage-books" : "productImage"}
                                    alt="products" key={im.id}
                                    loading="lazy"
                                /></div>

                            <div className="productNameAndRupee">
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
            <div className="paginateClass">
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={10}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </>
    )
}

