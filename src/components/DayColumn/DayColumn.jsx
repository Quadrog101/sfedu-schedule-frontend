import React from "react";
import {Event} from "../Event/Event";

const isCrossed = (dayEvents) => {
    dayEvents.forEach((item) => {
        dayEvents.forEach((item2) => {
            if ((item.id !== item2.id)&&(item.eventStart <= item2.eventEnd)&&(item.eventEnd >= item2.eventStart)) {
                item.crossed = 1;
                item2.crossed = 1;
            }
        });
    });
    return dayEvents;
};

const DayColumn = ({events,day,height,eventProps}) => {
    const dayEvents = events.map((event) => {
        const startTime = event.begin.split(":").map(Number);
        const endTime = event.end.split(":").map(Number);
        event.eventStart = startTime[0] + startTime[1] / 60;
        event.eventEnd = endTime[0] + endTime[1] / 60;
        event.crossed = 0;
        return event;
    });

    const style = { 
        height: `${height}px`
    };

    return (
        <div className="columnWrapper">
            <div className="columnHeader">
                <span>{day}</span>
            </div>
            <div className="dayEvents" style={style}>
            {
                isCrossed(dayEvents).map((event,index) => {
                    return <Event key={index} event={event} params={eventProps} />
                })
            }
            </div>
        </div>
    )
};

export { DayColumn };