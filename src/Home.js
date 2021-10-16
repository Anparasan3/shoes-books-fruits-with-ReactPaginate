import React from 'react'
import { useHistory } from 'react-router-dom'
import './Style/Home.css';
import ReactGA from 'react-ga'

export default function Home(props) {
    let history = useHistory();
    function IndexShoes() {
        ReactGA.event({
            category: 'home',
            action: 'shoes',
        });
        history.push("/plugin-content/search?product=shoes")
    }
    function IndexBooks() {
        ReactGA.event({
            category: 'home',
            action: 'books',
        });
        history.push("/plugin-content/search?product=books")
    }
    function IndexFruits() {
        ReactGA.event({
            category: 'home',
            action: 'fruits',
        });
        history.push("/plugin-content/search?product=fruits")
    }
    
    return (
        <div className="Home-Container">
            <h1>Hello!!! world.</h1>
            <p>This is sample home page.</p>
            <div className="Home-Product">
                <div className="products-link" onClick={() => IndexShoes()}>
                    <div className="Home-Shoes" >
                        <span className="Home-Shoes" >shoes</span>
                    </div>
                </div>
                <div className="products-link" onClick={() => IndexBooks()}>
                    <div className="Home-Shoes" >
                        <span className="Home-Shoes" >books</span>
                    </div>
                </div>
                <div className="products-link" onClick={() => IndexFruits()}>
                    <div className="Home-Shoes" >
                        <span className="Home-Shoes" >fruits</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
