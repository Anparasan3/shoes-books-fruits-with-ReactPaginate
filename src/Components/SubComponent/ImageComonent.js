import React from 'react';


function ImageComponent(props) {
    const {classNames} = props;

    return(
        <>
        <img 
            src = {
                props.Update.cardNo == props.index ?
                    props.images[props.Update.imgNo]
                    : props.images[0]} 
            className = {classNames} 
            alt = '' 
        />
        </>
    )
}

export default ImageComponent;