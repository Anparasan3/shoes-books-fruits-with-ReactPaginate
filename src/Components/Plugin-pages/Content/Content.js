import React, { useState, useEffect } from 'react';

import './Content.css';
import axios from 'axios';
import ConstantProduct from './Components/ConstantProduct.js';
import PaginateComponent from './PaginateComponent';

export default function Content(props){

    const [books, setBooks] = useState([]);

    useEffect( () => {
        if(props.searchProduct === 'books'){
            axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kwIW3S2ch3Ur3wW3ndPuYWfpCZLkonmB`)
                .then(res => {
                    console.log(res)
                    setBooks(res.data.results.books)
                })
        } else {
            setBooks('no data')
        }
    },[props.searchProduct]);
    console.log(books);
    
    return(
        <div className="Content-Container">
            <div className="content">
                <ConstantProduct 
                    searchProduct={props.searchProduct}
                />
                <PaginateComponent 
                    books={books}
                    searchProduct={props.searchProduct}
                />
            </div>
        </div> 
    );
}

