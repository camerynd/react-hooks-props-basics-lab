import React from "react";

function RenderBio(props) {
    if(props.bioContent === undefined || props.bioContent === '') {
        return null;
    } else {
        return <p>{props.bioContent}</p>;
    }
}

export default RenderBio;