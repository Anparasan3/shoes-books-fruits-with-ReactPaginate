import React from 'react';
import'./TopMenuMobile.css';

export default function TopMenuMobile(props){
    if(props.topMenuMobileState === 'true'){
        function invisibleBar(){
            //props.setTopMenuMobileState('false');
        }
        return(
            <div className="TopMenuMobile">
                <button className="Home" 
                    onClick={() => invisibleBar()}>Home</button>
                <button className="Home" 
                    onClick={() => invisibleBar()}>Products</button>
                <button className="Home" 
                    onClick={() => invisibleBar()}>About Us</button>
                <button className="Home" 
                    onClick={() => invisibleBar()}>Contact Us</button>
            </div>
        );
    }
    else{
        return(
            <div/>
        );
    }
}