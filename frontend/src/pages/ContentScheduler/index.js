import React from 'react';
import Calendar from '../../components/Dashboard/ContentScheduler/Content/Calendar';
import Graphs from '../../components/Dashboard/ContentScheduler/Content/Graphs';
import DragandDrop from '../../components/Dashboard/ContentScheduler/Content/DragandDrop';
//import '../styles/Global.css';

export default function Home() {
  return (
    <div>
      <main className="container">
        <h1>Content Scheduler</h1>
        <Graphs />
        <div className="content-layout" style={{ display: 'flex', gap: '10px' }}>
          <div className="scheduler-container" style={{ flex: 2 }}>
            <Calendar />
          </div>
          <div className="drag-drop-container" style={{ flex: 1 }}>
            <DragandDrop />
          </div>
        </div>
      </main>
    </div>
  );
}
