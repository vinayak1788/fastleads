import React from "react";
import styles from "../../../styles/Engagementfeed/SocialCard.module.css";

export const SocialCard = ({ item }) => {
  const sentimentClass =
    item.sentiment === "Positive"
      ? styles.positive
      : item.sentiment === "Negative"
      ? styles.negative
      : styles.neutral;

  return (
    <div className={`${styles.card} ${sentimentClass}`}>
      <h3>@{item.user}</h3>
      <p>{new Date(item.created_at).toLocaleString()}</p>
      <p>{item.text}</p>
      <p>
        👍 Likes: {item.likes} 🔄 Retweets: {item.retweets}
      </p>
      <p>Platform: {item.platform}</p>
      <p>Sentiment: {item.sentiment}</p>
    </div>
  );
};
