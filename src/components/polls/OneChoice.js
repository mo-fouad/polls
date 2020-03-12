import React, {useState} from 'react';


// TODO :: Ask About the Color Param in the Respond !!!

function OneChoice(props) {

    let {ele, rectWidth} = props;

    let Key = Object.keys(ele)[0];
    let nameOfKey;

    if (Key === "color") {
        nameOfKey = "color"
    } else {
        nameOfKey = "choice"
    }
    const rectStyle = {
        width: rectWidth +'%'
    };

    return (
        <div className="vote">
            <div className="vote-rect" style={rectStyle}>
                <b>{ele[nameOfKey]}</b>
                <small className="vote-numbers">{ele.votes}</small>
            </div>
        </div>
        // todo :: Adding Function to post a Vote
    )
}

export default OneChoice;