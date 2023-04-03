import React from "react";
import {Event} from "../Event/Event";

const isCrossed = (dayEvents) => {
    let newM = [];
    for (let i = 0; i < dayEvents.length; i++) {
        const currentEvent = dayEvents[i];
        let temp = {};
        if(i === dayEvents.length - 1){
            temp = {a:currentEvent};
            newM.push(temp);
            break;
        }
        
        const nextEvent = dayEvents[i + 1];
        if (currentEvent.eventEnd >= nextEvent.eventStart) {
            currentEvent.crossed = 1;
            nextEvent.crossed = 2;
        
            newM.push({a:currentEvent,b:nextEvent});
            i++;
        } else {
            newM.push({a:currentEvent});
        }
    }
    return newM;
};

const DayColumn = ({events,day,height,visibility,displayState,eventProps}) => {
    const dayEvents = events.map((event) => {
        const startTime = event.begin.split(":").map(Number);
        const endTime = event.end.split(":").map(Number);
        event.eventStart = startTime[0] + startTime[1] / 60;
        event.eventEnd = endTime[0] + endTime[1] / 60;
        event.crossed = 0;
        return event;
    });

    eventProps.visibility = visibility;
    eventProps.displayState = displayState; 
    dayEvents.sort((a, b) => a.eventStart - b.eventStart);

    const style = { 
        height: `${height}px`
    };
    const mobStyle = {};
    
    // console.log(`${day}`,isCrossed(dayEvents));
    return (
        <div className="columnWrapper">
            <div className="columnHeader">
                <span>{day}</span>
            </div>
            <div className="dayEvents" style={displayState ? style : mobStyle}>
            {
                isCrossed(dayEvents).map((event,index) => {
                    if(typeof event['b'] !== "undefined") {
                        return (
                            <div className="parityWrapper" key={index}>
                            {
                                  Object.keys(event).map((el,i) => (
                                    <Event key={event[el].id} event={event[el]} params={eventProps} />
                                  ))
                            }
                            </div>
                        )
                    } else {
                        return <Event key={event.a.id} event={event.a} params={eventProps} />
                    }
                })
            }
            </div>
        </div>
    )
};

export { DayColumn };