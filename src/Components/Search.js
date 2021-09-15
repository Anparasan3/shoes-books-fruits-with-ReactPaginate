import React, { useState, lazy, Suspense } from 'react';

import TopMenuMobile from './Plugin-pages/Topmenu/TopMenuMobile';
import Chat from './Plugin-pages/Chat/Chat';

import Topmenu from './Plugin-pages/Topmenu/Topmenu';
import Footer from './Plugin-pages/Footer/Footer';
import Content from './Plugin-pages/Content/Content';
// const Content = lazy(() => import('./Plugin-pages/Content/Content'));

export default function Search({ location }) {

    console.log('before q')
    const [topMenuMobileState, setTopMenuMobileState] = useState('false');
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    console.log('testing q : ',q)
    var searchProduct = q;

    //var url = '';
    // if(searchProduct.split('_')[0] === "shoes"){
    //     url = 'https://json.extendsclass.com/bin/e0e97d344c2b';
    // }
    // else if (searchProduct.split('_')[0] === "books") {
    //     url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kwIW3S2ch3Ur3wW3ndPuYWfpCZLkonmB';
    // }
    // else if (searchProduct.split('_')[0] === "fruits") {
    //     url = 'https://json.extendsclass.com/bin/2508dcc3470a';
    // }

    console.log('* * * * * * * * * * * * * * * * * *')
    console.log('       <- {^_^} ->', ' hai!!')
    console.log('       welcome to console!')
    console.log('* * * * * * * * * * * * * * * * * *')

    return(
        <div>
            <Suspense fallback={<div>Loading....</div>}>
                <Topmenu 
                    topMenuMobileState={topMenuMobileState}
                    setTopMenuMobileState={setTopMenuMobileState}
                />
                <Content searchProduct={searchProduct} />
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
