import React, { useEffect, useState } from "react";
import {Timeline} from "../Timeline/Timeline";
import {DayColumn} from "../DayColumn/DayColumn";
import './schedule.scss';


const ScheduleGrid = ({events}) => {
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const timelineStartHour = 8;
    const timelineEndHour = 18;
    const timelineHeight = 50;

    const timelineCount = (timelineEndHour - timelineStartHour)+1;
    const columnHeight = timelineHeight*timelineCount;

    const eventProps = {
        scale: timelineCount,
        start: timelineStartHour
    };

    return(
        <div className="scheduleWrapper">
            <div className="scheduleTimeline">
                <Timeline itemsCount={timelineCount} startHour={timelineStartHour} lineHeight={timelineHeight} />
            </div>
            <div className="cd_schedule">
                <div className="schedule">
                {
                    [...Array(days.length)].map((n,i) => 
                        <DayColumn key={i} events={events.filter(event => event.dayNumber === days[i])} day={days[i]} height={columnHeight} eventProps={eventProps} />
                    )
                }
                </div>
            </div>
        </div>
    );
};

export { ScheduleGrid };