import React, { useState, lazy, Suspense } from 'react';

import TopMenuMobile from './Plugin-pages/Topmenu/TopMenuMobile';
import Chat from './Plugin-pages/Chat/Chat';

import Topmenu from './Plugin-pages/Topmenu/Topmenu';
import Footer from './Plugin-pages/Footer/Footer';
//import Content from './Plugin-pages/Content/Content';

const Content = lazy(() => import('./Plugin-pages/Content/Content'));

export default function Search({ location }) {
    const [topMenuMobileState, setTopMenuMobileState] = useState('false');

    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    console.log(". . . .",q);
    var searchProduct = q;

    var url = '';
    if(searchProduct.split('_')[0] === "shoes"){
        console.log("working");
        url = 'https://json.extendsclass.com/bin/e0e97d344c2b';
    }
    else if (searchProduct.split('_')[0] === "books") {
        url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kwIW3S2ch3Ur3wW3ndPuYWfpCZLkonmB';
    }
    else if (searchProduct.split('_')[0] === "fruits") {
        url = 'https://json.extendsclass.com/bin/2508dcc3470a';
    }
    
    return(
        <div>
            <Suspense fallback={<div>Loading....</div>}>
                <Topmenu 
                    topMenuMobileState={topMenuMobileState}
                    setTopMenuMobileState={setTopMenuMobileState}
                />
                <Content url={url} searchProduct={searchProduct}/>
                <Footer/>
                <TopMenuMobile 
                    topMenuMobileState={topMenuMobileState}
                    setTopMenuMobileState={setTopMenuMobileState}
                />
                <Chat/>
            </Suspense>
        </div>
    );
}
