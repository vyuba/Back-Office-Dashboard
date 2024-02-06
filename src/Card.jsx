// import React from "react";

function Card(props){
    return(
        <div className="firstCard">
            <div className="firstRow">
                <div className='imageContainer'>
                    <img src={props.image} alt="" srcset="" />
                    <img className="arrowImage" src="../assets/Combined Shape.png" alt="" srcset="" />
                </div>
                <div>
                <p className="cardBoldText">{props.firsttext}</p>
                <span className="span firstSpan">
                <p1>{props.secondText}</p1>
                <p className="">yesterday</p>
                </span>
                <span className="span secondSpan">
                <p1>{props.thirdText}</p1>
                <p className="">last friday</p>
                </span>
                </div>
            </div>

            <div className="secondRow">
              <span className="cardBoldText">
              <p>{props.fourthText}</p>
              <p>{props.fifthText}</p>
              </span>
              <span>
              <p className="cardSmallText">{props.sixthText}</p>
              <p className="cardSmallText"> <span>{props.seventhText}</span> {props.eigthText}</p>
              </span>
            </div>
        </div>
    )
}

export default Card