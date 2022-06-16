import React from 'react';

//Gif
import LoadingIcon from "../gif/loading.gif"

const Loading = () => {
    return (
        <div>
            <img src={LoadingIcon} alt="loading"/>
            <h3>loading ...</h3>
        </div>
    );
};

export default Loading;