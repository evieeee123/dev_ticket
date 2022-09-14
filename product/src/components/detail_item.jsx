import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"

function DetailItem(props) {

    // const [price, setPrice] = useState("");
    // const [des, setDes] = useState("");
    // const [rate, setRate] = useState(0);
    // const [count, setCount] = useState(0);

    // useEffect(() => {

    //     // function handleClick(state) {
    //         // 和 this.setState({ fruit: 'orange' }) 类似
    //         setPrice(price);
    //         setDes(des);
    //         setRate(rate);
    //         setCount(count)
    //         debugger
    //     // }
    // })


    // return (
    //     <div>
    //         <div >$ {price}</div>
    //         <div>{des}</div>
    //         <div>
    //             <div>{rate}</div>
    //             <div>{count}</div>
    //         </div>
    //     </div>
    // )
    return (
        <div className="info-box">
            <div>$ {props.price}</div>
            <div>{props.des}</div>
            <div>{props.rate}</div>
        </div>
    )

}
export default DetailItem;
