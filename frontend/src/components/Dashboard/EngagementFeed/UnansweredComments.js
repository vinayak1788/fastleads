import React, { useEffect, useState } from "react";
import styles from "../../../styles/Engagementfeed/UnansweredComments.module.css";

const UnansweredComments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/unanswered-comments/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setComments(data);
      } catch (err) {
        console.error("Error fetching unanswered comments:", err);
        setError("Failed to load unanswered comments.");
      }
    };

    fetchComments();
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <h3>Unanswered Comments & DMs</h3>
      {error && <p className={styles.error}>{error}</p>}
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>
                <strong>@{comment.user}</strong>: {comment.text}
              </p>
              <p>Platform: {comment.platform}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No unanswered comments available.</p>
      )}
    </div>
  );
};

export default UnansweredComments;
