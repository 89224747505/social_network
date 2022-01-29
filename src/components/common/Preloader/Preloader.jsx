import React from 'react';
import Spinner from "../../../img/Spinner.svg";

const Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img src={Spinner}/> : null}
        </div>
    );
};

export default Preloader;