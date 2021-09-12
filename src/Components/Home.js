import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="Home-Container">
                <h1>Hello!!! world.</h1>
                <p>This is sample home page.</p>
                <div className="Home-Product">
                    <div className="products-link">
                        <div className="Home-Shoes">
                            <Link to="/search?q=shoes" className="Home-Shoes">shoes</Link>
                        </div>
                    </div>
                    <div className="products-link">
                        <div className="Home-Shoes">
                            <Link to="/search?q=books" className="Home-Shoes">books</Link>
                        </div>
                    </div>
                    <div className="products-link">
                        <div className="Home-Shoes">
                            <Link to="/search?q=fruits" className="Home-Shoes">fruits</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
