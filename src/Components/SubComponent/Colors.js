import React from 'react'
import styled from 'styled-components'
import '../Style/ColorsVariety.css'

const MyButton = styled.button`
 cursor: pointer;
    margin-left: 8px;
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 20px;
    background-color:${(props) =>  props.ColorButtonColor};
    transform: ${(props) => props.focus === "1" ? "scale(0.95)": "scale(0.8)"};
`;
export default function Colors(props){
    return (
        <div className = "Colors">
            <div className = "Color-name">{props.colorsTitle || props.colorTitle}</div>
            <div className = "colorButtonDiv">
            {
                props.colors.map((data, index) => {
                    return(
                        <div key = {index}>
                            <MyButton
                                ColorButtonColor = {data.code.hex || data.color}
                                onClick={() => props.SetUpdate({cardNo:props.index.toString(), imgNo:index.toString()})}
                                focus={
                                    props.Update.cardNo == props.index ? (props.Update.imgNo == index ?  "1" : "0") : (index === 0) ? "1" : "0"}
                            />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
