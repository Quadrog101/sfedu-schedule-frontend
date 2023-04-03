import React, { useEffect, useState } from 'react';
import {Header} from "../Header/Header";
import {Monitor} from "../Monitor/Monitor";
import {ScheduleGrid} from "../ScheduleGrid/ScheduleGrid";
import {SwitchParity} from "../SwitchParity/SwitchParity";
import eve from "../../db.json";

function App() {

  const [events, setEvents] = useState([]);

  const updateData = (value) => {
    setEvents(value);
  }
  const [parity, setParity] = useState();

  const updateParity = (value) => {
    setParity(value);
  }
  return (
    <div>
      <Header />
      <Monitor updateData={updateData} />
      <SwitchParity updateParity={updateParity} />
      <ScheduleGrid events = {events} parity = {parity} />
    </div>
  );
}

export default App;
