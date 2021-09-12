import React, { useState } from 'react';
import './Topmenu.css'
//import TopMenuMobile from './TopMenuMobile';



export default function Topmenu(props){
    function TopMenuMobileView(){
        if(props.topMenuMobileState === 'false'){
            props.setTopMenuMobileState('true');
        }
        else{
            props.setTopMenuMobileState('false');
        }
    }


    return(
        <div className="Topmenu-Container">
            <div className="Topmenu-Text">
                <div className="top-bar-mobile">
                    <i class="fas fa-bars"
                        onClick={() => TopMenuMobileView()}
                    />
                    <div className="agora-mobile">AGORA</div>
                </div>
                <div className="Agora">AGORA</div>
                <div className="Top-Content">
                    <div className="Titles">Home</div>
                    <div className="Titles">Products</div>
                    <div className="Titles">About Us</div>
                    <div className="Titles">Contact Us</div>
                </div>
            </div>
        </div>
    );
}