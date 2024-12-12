import React from 'react';
import DashboardCard from '../../DashboardCard'; // Reusable card component
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import styles for the progress bar
import './EngagementFeedCard.css'; // Custom CSS for this component

const EngagementFeedCard = () => {
  const answeredPercentage = 22; // Percentage of answered comments
  const unansweredPercentage = 78; // Percentage of unanswered comments

  return (
    <DashboardCard className="engagement-feed-card">
      <div className="card-header"><span>Engagement & Interaction Feed</span>
         {/* Adding a button with a link href */}
       <a href="/another-page" className="close-button">
          <button>↗</button>
        </a>
      </div>
      <div className="card-body">
        <div className="progress-container">
          {/* Circular Progress for Answered Comments */}
          <div className="progress-item">
            <CircularProgressbar
              value={answeredPercentage}
              text={`${answeredPercentage}%`}
              styles={buildStyles({
                textColor: '#36A2EB',
                pathColor: '#36A2EB',
                trailColor: '#d6d6d6',
              })}
            />
            <p>Answered Comments</p>
          </div>

          {/* Circular Progress for Unanswered Comments */}
          <div className="progress-item">
            <CircularProgressbar
              value={unansweredPercentage}
              text={`${unansweredPercentage}%`}
              styles={buildStyles({
                textColor: '#FF6384',
                pathColor: '#FF6384',
                trailColor: '#d6d6d6',
              })}
            />
            <p>Unanswered Comments</p>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default EngagementFeedCard;
