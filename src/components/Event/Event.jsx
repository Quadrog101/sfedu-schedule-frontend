import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Event = ({event,params}) => {
    const scale = (event.eventEnd - event.eventStart)/params.scale*100;
    const position = (event.eventStart - params.start)/params.scale*100;

    const sca = `${scale}%`;
    const pos = `${position}%`;

    let align = event.crossed && event.subGroup === 2 ? `50%` : `0%`;
    let width = event.crossed ? `50%` : `100%`;


    // const changePosition = () => {
    //     document.getElementsByClassName('event').style.top = position;
    // };

    const activateEve = (e) => {
        console.log(e,"fwaf");
        e.target.closest("div").style.backgroundColor = getRandomColor();
    }

    const style = { 
        top: pos,
        height: sca,
        width: width,
        left: align,
    };

    const time = `${event.begin.substring(0, 5)} - ${event.end.substring(0, 5)}`;
    
    return (
        <div className="event" style={style} /*onClick={activateEve}*/>
            <p>{time}</p>
            <p>{event.description} <span className="classRoom">(ауд. {event.classRoom})</span></p>
            <p>{event.teacher}</p>
            <p>{event.subGroup}</p>
        </div>
    )
};

export { Event };