import React from 'react';

const Card = (props) => {
    let { confirmed, deaths, recovered } = props.globalInfo

    console.log(props.globalInfo)
    return (
        <div>
            <p>{confirmed.value}</p>
        </div>
    )
}

export default Card;