// import React from 'react';
// import DashboardCard from '../../DashboardCard';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import styles from './EngagementFeedCard.module.css';

// const EngagementFeedCard = () => {
//   const answeredPercentage = 22;
//   const unansweredPercentage = 78;

//   return (
//     <DashboardCard className={styles['engagement-feed-card']}>
//       <div className={styles['card-header']}>
//         <span>Engagement & Interaction Feed</span>
//         <a href="/Engagement_Feed" className={styles['close-button']}>
//           <button>↗</button>
//         </a>
//       </div>
//       <div className={styles['card-body']}>
//         <div className={styles['progress-container']}>
//           <div className={styles['progress-item']}>
//             <CircularProgressbar
//               value={answeredPercentage}
//               text={`${answeredPercentage}%`}
//               styles={buildStyles({
//                 textColor: '#36A2EB',
//                 pathColor: '#36A2EB',
//                 trailColor: '#d6d6d6',
//               })}
//             />
//             <p>Answered Comments</p>
//           </div>

//           <div className={styles['progress-item']}>
//             <CircularProgressbar
//               value={unansweredPercentage}
//               text={`${unansweredPercentage}%`}
//               styles={buildStyles({
//                 textColor: '#FF6384',
//                 pathColor: '#FF6384',
//                 trailColor: '#d6d6d6',
//               })}
//             />
//             <p>Unanswered Comments</p>
//           </div>
//         </div>
//       </div>
//     </DashboardCard>
//   );
// };

// export default EngagementFeedCard;
import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from './EngagementFeedCard.module.css';

const EngagementCard = () => {
  const totalComments = 90;
  const answeredComments = 20;
  const unansweredComments = 70;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>Engagement & Interaction Feed</span>
        <a href="/Engagement_Feed" className={styles['close-button']}>
          <button>↗</button>
        </a>
      </div>
      <div className={styles.content}>
        <div className={styles.progressContainer}>
          <CircularProgressbarWithChildren
            value={(answeredComments / totalComments) * 100}
            styles={buildStyles({
              pathColor: "#6DD400", // Green for answered
              trailColor: "#5F78FF", // Blue for unanswered
              strokeLinecap: "butt",
            })}
          >
            <div className={styles.centerText}>
              <span className={styles.total}>{totalComments}</span>
              <span className={styles.totalLabel}>TOTAL COMMENTS</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.answered}`}></span>
            Answered Comments
            <span className={styles.legendCount}>{answeredComments}</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.unanswered}`}></span>
            Unanswered Comments
            <span className={styles.legendCount}>{unansweredComments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementCard;
