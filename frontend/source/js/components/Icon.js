import React from 'react';

const Icon = ({id}) => {
    return(
        <svg >
            <use xlinkHref={'#' + id}/>
        </svg>

    )
}


export default Icon;