import React from "react";
import Rating from "./rating";

function DetailItem(props) {
    return (
        <div className="info-box">
            <div>
                <div className="price">$ {props.price}</div>
                <div className="des">{props.des}</div>
                <div className="rate">
                    <div>
                        <Rating rate={props.rate} />
                    </div>
                    <div className="count">
                        ({props.count})
                    </div>
                </div>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}
export default DetailItem;
