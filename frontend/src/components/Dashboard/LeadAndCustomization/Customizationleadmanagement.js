import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

export default function CustomizationLeadManagement() {
  const [leadData, setLeadData] = useState([]);
  const [priorityData, setPriorityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Uncomment for real fetch calls or use hardcoded data for testing
        // Fetch lead data
        const leadsResponse = await fetch('http://localhost:8000/leads');
        const leads = await leadsResponse.json();
        console.log('Leads Data:', leads); // Add this line for debugging
        setLeadData(leads);

        // Fetch priority data
        const priorityResponse = await fetch('http://localhost:8000/priorities');
        const priorities = await priorityResponse.json();
        console.log('Priority Data:', priorities); // Add this line for debugging
        setPriorityData(priorities);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  // If no data, show a message
  if (!leadData.length || !priorityData.length) {
    return <div className="text-center">No data available</div>;
  }

  return (
    <div className="flex-1 p-6">
      <div className="bg-white p-6 rounded-lg shadow-sm relative">
        {/* Title and content */}
        <h3 className="text-xl font-semibold mb-6">Customization Lead Management</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart for Lead Data */}
          <div className="bg-white p-4 rounded-lg shadow-sm" style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={leadData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="leads" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart for Priority Data */}
          <div className="bg-white p-4 rounded-lg shadow-sm" style={{ height: '400px' }}>
            <h3 className="text-lg font-semibold mb-4 text-center">TOTAL PRIORITY</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={priorityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {priorityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="middle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
