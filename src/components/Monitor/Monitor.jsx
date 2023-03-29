import React, { useEffect, useState } from "react";

const CustomSelect = ({options, onChange }) => {
    return (
        <select className="select-block" onChange={onChange}>
            { options.map((option, index) =>
                <option key={index} value={index}>{option.name}</option>
            )}
        </select>
    )
};

const Monitor = ({updateData}) => {
    const [idInst, setIdInst] = useState('');
    const [idFac, setIdFac] = useState('');
    const [idGroup, setIdGroup] = useState('');
    const [institutes, setInstitutes] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [groups, setGroups] = useState([]);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://schedule.dimdey.live/api/institute/list')
          .then(res => res.json())
          .then(res => {
            setInstitutes(res.institutes);
          });
    }, []);


    function onInstListChange(value) {
        setIdInst(institutes[value]?.id);
    }
    function onFacListChange(value) {
        setIdFac(faculties[value]?.id);
    }
    function onGroupListChange(value) {
        setIdGroup(groups[value]?.id);
    }

    useEffect(() => {
        facUpdate();
    }, [idInst]);

    useEffect(() => {
        groupUpdate();
    }, [idFac]);

    useEffect(() => {
        eventUpdate();
    }, [idGroup]);

    useEffect(() => {
        if(events){
            updateData(events);
        }
    }, [events]);


    function facUpdate() {
        if(idInst){
            fetch(`https://schedule.dimdey.live/api/faculty/list/${idInst}`)
            .then(res => res.json())
            .then(res => {
                setFaculties(res.faculties);
            });
        }
    }
    function groupUpdate() {
        if(idFac){
            fetch(`https://schedule.dimdey.live/api/faculty/groups/${idFac}`)
            .then(res => res.json())
            .then(res => {
                setGroups(res.groups);
            });
        }
    }
    function eventUpdate() {
        if(idGroup){
            fetch(`https://schedule.dimdey.live/api/group/details/${idGroup}`)
            .then(res => res.json())
            .then(res => {
                setEvents(res.events);
            });
        }
    }

    return(
        <div className="monitor">
            <CustomSelect options={institutes} onChange={e => onInstListChange(e.target.value)} />
            <CustomSelect options={faculties} onChange={e => onFacListChange(e.target.value)} />
            <CustomSelect options={groups} onChange={e => onGroupListChange(e.target.value)} />
        </div>
    );
};

export { Monitor };