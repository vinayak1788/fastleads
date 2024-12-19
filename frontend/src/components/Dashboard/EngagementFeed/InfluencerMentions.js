import React, { useEffect, useState } from "react";
import styles from "../../../styles/Engagementfeed/InfluencerMentions.module.css";

const InfluencerMentions = () => {
  const [influencers, setInfluencers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/influencers/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setInfluencers(data);
      } catch (err) {
        console.error("Error fetching influencers:", err);
        setError("Failed to load influencers.");
      }
    };

    fetchInfluencers();
  }, []);

  return (
    <div className={styles.influencersContainer}>
      <h3>Top Influencers</h3>
      {error && <p className={styles.error}>{error}</p>}
      {influencers.length > 0 ? (
        <table className={styles.influencerTable}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Followers</th>
              <th>Engagement</th>
            </tr>
          </thead>
          <tbody>
            {influencers.map((influencer, index) => (
              <tr key={influencer.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={influencer.profilePicture}
                    alt={influencer.name}
                    className={styles.profilePicture}
                  />
                </td>
                <td>{influencer.name}</td>
                <td>{influencer.followers}</td>
                <td>{influencer.engagement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No influencer mentions available.</p>
      )}
    </div>
  );
};

export default InfluencerMentions;
