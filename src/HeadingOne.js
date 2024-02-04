import React from 'react';
import headStyle from"./headingOne.module.css";
function HeadingOne(){

    return(
    <div className="wrapper">
        <h1>Heading</h1>
        <button className={headStyle.headbtn}>Button2</button>
 </div>
    )
}

export default HeadingOne;