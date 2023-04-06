import React, { useEffect, useState, useLayoutEffect } from "react";
import {Timeline} from "../Timeline/Timeline";
import {DayColumn} from "../DayColumn/DayColumn";
import './schedule.scss';

const ScheduleGrid = ({events,parity}) => {
    const days = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    //const currentParity = isEven(); 
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 767px)').matches);

    const timelineStartHour = 8;
    const timelineEndHour = 18;
    const timelineHeight = 110;

    const timelineCount = (timelineEndHour - timelineStartHour)+1;
    const columnHeight = timelineHeight*timelineCount;

    const eventProps = {
        scale: timelineCount,
        start: timelineStartHour,
        parity: parity,
    };

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, []);
    
    return(
        <div className="scheduleWrapper">
            <div className="scheduleTimeline">
                <Timeline itemsCount={timelineCount} startHour={timelineStartHour} lineHeight={timelineHeight} />
            </div>
            <div className="cd_schedule">
                <div className="schedule">
                {
                    [...Array(days.length)].map((n,i) => 
                        <DayColumn 
                            key={i}
                            events={events.filter(event => event.dayNumber === i && (event.onEven === parity || event.onEven === null))} 
                            day={days[i]}
                            height={columnHeight}
                            visibility={(20-i*2)}
                            displayState={matches}
                            eventProps={eventProps}
                            />
                        )
                }
                </div>
            </div>
        </div>
    );
};

export { ScheduleGrid };