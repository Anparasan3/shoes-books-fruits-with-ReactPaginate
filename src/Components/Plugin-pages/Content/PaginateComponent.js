import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import './Content.css';

import RealContent from './Components/RealContent';

export default function PaginateComponent(props) {

    const [items, setItems] = useState([]);
    const {searchProduct} = props;  // const searchProduct = props.searchProduct;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://fruits-shoes-api.herokuapp.com/${searchProduct}?_page=1&_limit=6`
            );
            const data = await res.json();
            setItems(data);
        };
        getComments();
    }, [searchProduct, setItems])
    console.log(items);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://fruits-shoes-api.herokuapp.com/${searchProduct}?_page=${currentPage}&_limit=6`
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
            <RealContent items={items} books={props.books} searchProduct={props.searchProduct}/>
            {
                searchProduct === "books" ? "" :
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
            }
        </>
    )
}

