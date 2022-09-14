import React from "react";
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';


function Rating(props){
    let full_stars = 0;
    let half_star = 0;
    if (props.rate < 0.75) {
        half_star = 1;
    } else if (props.rate < 1.25) {
        full_stars = 1;
    } else if (props.rate < 1.75) {
        full_stars = 1;
        half_star = 1;
    } else if (props.rate < 2.25) {
        full_stars = 2;
    } else if (props.rate < 2.75) {
        full_stars = 2;
        half_star = 1;
    } else if (props.rate < 3.25) {
        full_stars = 3;
    } else if (props.rate < 3.75) {
        full_stars = 3;
        half_star = 1;
    } else if (props.rate < 4.25) {
        full_stars = 4;
    } else if (props.rate < 4.75) {
        full_stars = 4;
        half_star = 1;
    } else {
        full_stars = 5;
    }

    return (
        <div className='rating'>
            {full_stars >= 1 ? <BsStarFill className="rate-star" /> : null}
            {full_stars >= 2 ? <BsStarFill className="rate-star" /> : null}
            {full_stars >= 3 ? <BsStarFill className="rate-star" /> : null}
            {full_stars >= 4 ? <BsStarFill className="rate-star" /> : null}
            {full_stars === 5 ? <BsStarFill className="rate-star" /> : null}
            {half_star === 1 ? <BsStarHalf className="half-star" /> : null}
            {5 - full_stars - half_star >= 1 ? <BsStarFill className="no-rate-star" /> : null}
            {5 - full_stars - half_star >= 2 ? <BsStarFill className="no-rate-star" /> : null}
            {5 - full_stars - half_star >= 3 ? <BsStarFill className="no-rate-star" /> : null}
            {5 - full_stars - half_star >= 4 ? <BsStarFill className="no-rate-star" /> : null}
            {5 - full_stars - half_star >= 5 ? <BsStarFill className="no-rate-star" /> : null}
        </div>
    )
}

export default Rating;