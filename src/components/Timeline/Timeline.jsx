import React from "react";

const Timeline = props => {
    let itemsCount = props.itemsCount;
    let startHour = props.startHour;
    let lineHeight = props.lineHeight;

    const style = {
        height: `${lineHeight}px`
    };

    return (
        <ul className="timeLine">
        {
            [...Array(itemsCount)].map((n,i) => 
                <li className="item" style={style} key={i}>
                    <span>
                    {
                        ("00" + startHour++).slice(-2) + ":00"
                    }
                    </span>
                </li>
            )
        }
        </ul>
    )
};

export { Timeline };