import React from 'react'
import TopComponent from './TopComponent';
import RealContent from './RealContent';

function Posts({posts, location}) {
    let items = posts
    // const {q} = props;
    // const {searchProduct} = props;

    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');
    console.log('testing product : ',product)
    
    let searchProduct = ''
    if(product === 'shoes'){
        // searchProduct = `https://plugin-content-api.herokuapp.com/shoes`
        searchProduct = `https://plugin-content-original-api.herokuapp.com/product`;
    } else if (product === 'fruits'){
        searchProduct = `https://plugin-content-api.herokuapp.com/fruits`
    } else if (product === 'books'){
        searchProduct = `https://plugin-content-api.herokuapp.com/books`
    } 

  return (
    <>
        <TopComponent items={items} q={product} />
        <RealContent items={items} searchProduct={searchProduct} q={product} />
    </>
  )
}

export default Posts
