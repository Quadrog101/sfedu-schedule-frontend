import React, { useEffect, useState } from "react";
import {Timeline} from "../Timeline/Timeline";
import {DayColumn} from "../DayColumn/DayColumn";
import './schedule.scss';

function isEven(){
    const currentDate= new Date();
    const semesterStartDate =  new Date(currentDate.getFullYear(),1,6);
    const numberOfDays = Math.floor((currentDate - semesterStartDate) / (24 * 60 * 60 * 1000));
    const numberOfWeeks = Math.ceil(( currentDate.getDay() + 1 + numberOfDays) / 7);
    return !Boolean(numberOfWeeks % 2);
}

const ScheduleGrid = ({events}) => {
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const parity = isEven(); 
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
                        <DayColumn 
                            key={i} 
                            events={events.filter(event => event.dayNumber === days[i] && (event.onEven === parity || event.onEven === null))} 
                            day={days[i]} 
                            height={columnHeight} 
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