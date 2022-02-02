import React from 'react';
import Spinner from "../../../img/Ellipsis.gif";

const Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img src={Spinner}/> : null}
        </div>
    );
};

export default Preloader;