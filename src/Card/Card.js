

import React from "react";
import './card-style.css'

export default function Card(props) {

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    }else if (props.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className='card'>
            {/* {!props.openSpots && <div className='card-badge'>SOLD OUT</div>} */}
            {
                badgeText && <div className='card-badge'>{badgeText}</div>
            }
            <img 
                src={props.coverImg} alt='Card Photo' 
                className='card-photo'
            />
            <div className='card-stats'>
                <img src={props.star} className='card-star' />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p>{props.description}</p>
            <p className='card-price'><b>From ${props.price}</b> / person</p>

            {/* <p>{props.openSpots}</p> */}

        </div>
    )
}

