import React from 'react';
import DashboardCard from '../../DashboardCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LeadAndCustomizationCard.css';
import Link from 'next/link';

const LeadAndCustomizationCard = () => {
  // Chart data (can be dynamic, or fetched from an API)
  const data = [
    { name: 'Jan', leads: 200 },
    { name: 'Feb', leads: 400 },
    { name: 'Mar', leads: 600 },
    { name: 'Apr', leads: 700 },
    { name: 'May', leads: 800 },
    { name: 'Jun', leads: 900 },
  ];

  return (
    <div className="lead-and-customization-card">
      {/* Lead Generation Overview Section */}
      <div className="leadcard1">
      <DashboardCard className="lead-overview-card">
        {/* <div className="leadcard-header">Lead Generation Overview
            
       <Link href="/Leads" className="close-button">
          <button>↗</button>
        </Link>
        </div> */}
        <div className="leadcard-header">
  Lead Generation Overview
  {/* Adding a button with a link href */}
  <Link href="/Leads" className="close-button">
    <button>↗</button>
  </Link>
</div>
        
        <div className="card-body">
          <div className="lead-overview-content">
            <div className="total-leads">
              <h2>Total Leads</h2>
              <h1>3205</h1>
            </div>
            <div className="platform-leads">
              <div className="platform-item linkedin">
                <p>LinkedIn</p>
                <p>2203</p>
              </div>
              <div className="platform-item facebook">
                <p>Facebook</p>
                <p>320</p>
              </div>
              <div className="platform-item instagram">
                <p>Instagram</p>
                <p>321</p>
              </div>
              <div className="platform-item twitter">
                <p>Twitter</p>
                <p>562</p>
              </div>
            </div>
          </div>
        </div>
      </DashboardCard>
      </div>

      {/* Customization Lead Management Section */}
      <div className="leadcard2">
      <DashboardCard className="customization-lead-management-card">
       <div className="card-header">
        <p>   
          <br></br>
          <br></br>
          <br></br>
        </p>
        <span>Customization Lead Management</span>
       </div>
        <div className="card-body">
          <div className="chart-container">
            {/* Recharts Line Chart */}
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="leads" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
            <div className="total-leads-graph">
              <h2>Total Leads</h2>
              <h1>402</h1>
            </div>
          </div>
        </div>
      </DashboardCard>
      </div>
    </div>
  );
};

export default LeadAndCustomizationCard;
