import React, { useState, useEffect } from 'react';
// import Pagination from '@material-ui/lab/Pagination';
// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");

import './Content.css';
import axios from 'axios';
// import InfiniteScroll from "react-infinite-scroll-component";
import ConstantProduct from '../Components/ConstantProduct.js';
import StarRate from '../Components/StartRate';
import ColorsVariety from '../Components/ColorsVariety';

export default function Content(props){
    const [images, setImages] = useState([]);
    const [imagesDefault, setImagesDefault] = useState([]);

    useEffect( () => {
        axios.get(props.url).then(res => {
            if (props.searchProduct === 'shoes'){
                console.log(res.data);
                setImagesDefault(res.data.constantImage)
                setImages(res.data.image)
            } else if(props.searchProduct === 'fruits'){
                console.log(res)
                setImagesDefault('https://freepngimg.com/thumb/fruit/4-2-fruit-png-image.png')
                setImages(res.data.responseData)
            } else if(props.searchProduct === 'books') {
                console.log(res.data.results.books)
                setImages(res.data.results.books)
                setImagesDefault(`https://www.animatedimages.org/data/media/53/animated-book-image-0032.gif`)
            }
        })
    },[props])


    const [users, setUsers] = useState(images.slice(0,50));
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;
    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map(() => {

        });

    // handlePageChange(pageNumber) {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    // }


    // const items = 6;
    // const [state, setState] = useState({DataSet: []});
    // const [PageNumber, SetPageNumber] = useState(1);

    // useEffect(() => {
    //     fetchData();
    // },[]);

    // const fetchData = () => {
    //     console.log("Inside FetchData");
    //     console.log("PageNumber : ",PageNumber);
    //     console.log("Item : ",items)
    //     axios
    //     .get(
    //         `https://jsonplaceholder.typicode.com/photos?_page=${PageNumber}&_limit=${items}`
    //     )
    //     .then(res =>
    //         {
    //         setState({
    //         DataSet: [...state.DataSet, ...res.data],
    //         })
    //         SetPageNumber(PageNumber+1);
    //         }
    //     );
    // };

    return(
        // <InfiniteScroll
        //     dataLength={images.length}
        //     next={fetchData}
        //     hasMore={true}
        //     loader={<h4>Loading...</h4>}
        // >
        
        <div className="Content-Container">
            {/* <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
            /> */}
            <div className="content">
                <ConstantProduct 
                    imagesDefault={imagesDefault}
                    images={images}
                />
                <div className={props.searchProduct==="books" ? "product-container bookscoloumns":"product-container"}>
                {   
                    images.map((im)=>{
                        return(
                            <div className={props.searchProduct==="books" ? "product-content-image books":"product-content-image"}>
                                <div className={props.searchProduct==="books" ? "" : "image-div"}>
                                <img 
                                    src={im.productImagePath || im.book_image || im.name} 
                                    className={im.book_image? "productImage-books" : "productImage"}
                                    alt="products" key={im.id}
                                    loading="lazy"
                                /></div>

                                <div className="productNameAndRupee">
                                    <div className="productNameVSpriceDiv">
                                        <div className="productName"><b>{im.title || im.productName}</b></div>
                                        <div className="rank"><b>{im.rank? "Rank : " : ""}</b>{im.rank}</div>
                                        <StarRate starRate={im.starRate || 4}/>
                                    </div>
                                    <div className="rupees">
                                        {im.price || im.onlineSellingPrice || im.Rs} $
                                        <div className="offerPrice" style={im.onlineSellingPrice?{display: "none"}: {}}>100 $</div>
                                    </div>
                                </div>
                                {props.searchProduct === 'shoes' ? 
                                    <ColorsVariety
                                    colorsTitle={im.colors.colorsTitle}
                                    colorvariety={im.colors.colorvariety}
                                    /> : ''}
                                {im.author?<div className="productDescription"><b>Author : </b>{im.author}</div> : <div/>}
                                <div className="productDescription">{im.productLongDescription}</div>
                                <button className="buynow">{im.buynow ? im.buynow : "BUY NOW" }</button>
                            </div>
                        );
                    })
                }
                </div>
            </div>
            {/* <Pagination count={10} /> */}
        </div>
        // </InfiniteScroll>   
    );
}

// || im.description




                // {   images.map((im)=>{
                //         return(
                //             <div className="product-content-image">
                //                 <img 
                //                     src={im.productImagePath || im.book_image} 
                //                     className={im.book_image? "productImage-books" : "productImage"}
                //                     alt="products" key={im.id}
                //                 /><br/>
                //                 <div className="productNameAndRupee">
                //                     <div className="productNameVSpriceDiv">
                //                         <div className="productName"><b>{im.title || im.productName}</b></div>
                //                         <div className="rank"><b>{im.rank? "Rank : " : ""}</b>{im.rank}</div>
                //                     </div>
                //                     <div className="rupees">
                //                         {im.price || im.onlineSellingPrice || im.Rs} $
                //                         <div className="offerPrice" style={im.onlineSellingPrice?{display: "none"}: {}}>100 $</div>
                //                     </div>
                //                 </div>
                //                 {im.author?<div className="productDescription"><b>Author : </b>{im.author}</div> : <div/>}
                //                 <div className="productDescription">{im.productLongDescription}</div>
                //                 <button className="buynow">{im.buynow}BUY NOW</button>
                //             </div>
                //         );
                //     })
                // } 