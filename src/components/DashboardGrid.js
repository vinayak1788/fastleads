import { WidgetsOutlined } from '@mui/icons-material'; // Add this import at the top

// Inside your DashboardGrid component, before the cards section:
<div style={{ 
  display: 'flex', 
  alignItems: 'center', 
  padding: '20px',
  marginBottom: '10px'
}}>
  <WidgetsOutlined sx={{ marginRight: '10px', fontSize: '28px' }} />
  <h1 style={{ margin: 0, fontSize: '24px' }}>Dashboard</h1>
</div>
