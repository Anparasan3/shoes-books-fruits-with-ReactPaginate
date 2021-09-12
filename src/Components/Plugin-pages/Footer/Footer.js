import React from 'react';
import './Footer.css'


export default function Footer(){
    return(
        <div className="Footer-Container">
            <div className="footerContent">
                <div className="FooterFirstBox">
                    <div className="addressWhiteTexts">AGORA</div>
                    <div className="address"><p>#No.of address location,<br/>Street, Landmark,<br/>City, State, Country,<br/>Pincode</p></div>
                    <div className="Years">C 2014 - 2021  Privacy Policy</div>
                </div>
                <div className="FooterSecondBox">
                    <div className="whiteText">ABOUT US</div>
                    <div className="text">Products</div>
                    <div className="text">Categories</div>
                    <div className="text">Stores</div>
                    <div className="text">Contact Us</div>
                </div>
                <div className="FooterThirdBox">
                    <div className="SocialIcons"><i class="fab fa-twitter-square"/></div>
                    <div className="SocialIcons"><i class="fab fa-facebook-square"/></div>
                    <div className="SocialIcons"><i class="fab fa-linkedin"></i></div>
                    <div className="SocialIcons"><i class="fab fa-skype"></i></div>
                </div>
            </div>
        </div>
    );
}