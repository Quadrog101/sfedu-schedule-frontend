import React, { useEffect, useState } from 'react';
import {Header} from "../Header/Header";
import {Monitor} from "../Monitor/Monitor";
import {ScheduleGrid} from "../ScheduleGrid/ScheduleGrid";
import eve from "../../db.json";

function App() {

  const [events, setEvents] = useState([]);

  const updateData = (value) => {
    setEvents(value);
  }

  return (
    <div>
      <Header />
      <Monitor updateData={updateData} />
      <ScheduleGrid events = {eve.events} />
    </div>
  );
}

export default App;
