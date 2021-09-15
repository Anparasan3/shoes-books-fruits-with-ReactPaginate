import React from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css';

export default function Home() {
    let history = useHistory();
    function IndexShoes() {
        history.push("/shoes-books-fruits-with-ReactPaginate/search?q=shoes")
    }
    function IndexBooks() {
        history.push("/shoes-books-fruits-with-ReactPaginate/search?q=books")
    }
    function IndexFruits() {
        history.push("/shoes-books-fruits-with-ReactPaginate/search?q=fruits")
    }
    return (
        <div className="Home-Container">
            <h1>Hello!!! world.</h1>
            <p>This is sample home page.</p>
            <div className="Home-Product">
                <div className="products-link">
                    <div className="Home-Shoes">
                        {/* <Link to="/shoes-books-fruits-with-ReactPaginate/search?q=shoes" className="Home-Shoes">shoes</Link> */}
                        <span className="Home-Shoes" onClick={() => IndexShoes()}>shoes</span>
                    </div>
                </div>
                <div className="products-link">
                    <div className="Home-Shoes">
                        {/* <Link to="/shoes-books-fruits-with-ReactPaginate/search?q=books" className="Home-Shoes">books</Link> */}
                        <span className="Home-Shoes" onClick={() => IndexBooks()}>books</span>
                    </div>
                </div>
                <div className="products-link">
                    <div className="Home-Shoes">
                        {/* <Link to="/shoes-books-fruits-with-ReactPaginate/search?q=fruits" className="Home-Shoes">fruits</Link> */}
                        <span className="Home-Shoes" onClick={() => IndexFruits()}>fruits</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


// "homepage": "https://anparasan3.github.io/shoes-books-fruits-with-ReactPaginate",
