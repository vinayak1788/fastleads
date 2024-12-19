import React, { useEffect, useState } from "react";
import Charts from "./Charts";
import { Bar, Doughnut } from "react-chartjs-2";
import { SocialCard } from "./SocialCard";
import UnansweredComments from "./UnansweredComments";
import InfluencerMentions from "./InfluencerMentions";
import styles from "../../../styles/Engagementfeed/EngagementFeed.module.css";

export const EngagementFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("OpenAI");
  const [trendsData, setTrendsData] = useState({
    dates: [],
    posts: [],
    sentiments: { Positive: 0, Neutral: 0, Negative: 0 },
  });
  const [influencersData, setInfluencersData] = useState([]);
  const [platformMetrics, setPlatformMetrics] = useState({});
  const [dataSource, setDataSource] = useState("CSV");
  const [error, setError] = useState(null);

  const [showGraphs, setShowGraphs] = useState(true);
  const [showComments, setShowComments] = useState(true);
  const [showInfluencers, setShowInfluencers] = useState(true);
  const [showMentions, setShowMentions] = useState(true);

  // Fetch mentions for the selected brand
  const fetchFeedItems = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/twitter-mentions/?brand=${selectedBrand}&timestamp=${Date.now()}`
      );
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setFeedItems(data);
      setDataSource("Twitter API");
      setError(null);
    } catch (err) {
      console.error("Error fetching feed items:", err);
      setError("Failed to fetch Twitter API data. Showing fallback data.");
      setDataSource("CSV");
    }
  };

  const fetchTrendsData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/engagement-trends/");
      const data = await response.json();
      setTrendsData(data);
    } catch (err) {
      console.error("Error fetching trends data:", err);
    }
  };

  const fetchInfluencersData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/influencers/");
      const data = await response.json();
      setInfluencersData(data);
    } catch (err) {
      console.error("Error fetching influencers data:", err);
    }
  };

  const fetchPlatformMetrics = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/platform-metrics/");
      const data = await response.json();
      setPlatformMetrics(data);
    } catch (err) {
      console.error("Error fetching platform metrics:", err);
    }
  };

  useEffect(() => {
    fetchFeedItems();
    fetchTrendsData();
    fetchInfluencersData();
    fetchPlatformMetrics();

    const interval = setInterval(fetchFeedItems, 10000);
    return () => clearInterval(interval);
  }, [selectedBrand]);

  // Donut chart data (for total comments breakdown)
  const donutData = {
    labels: ["Answered", "Unanswered"],
    datasets: [
      {
        data: [Math.floor(feedItems.length * 0.3), Math.ceil(feedItems.length * 0.7)],
        backgroundColor: ["#4caf50", "#ff5722"],
      },
    ],
  };

  // Engagement bar graph data
  const engagementBarData = {
    labels: ["Likes", "Followers", "Retweets"],
    datasets: [
      {
        label: "Engagement Overview",
        data: [
          platformMetrics.Twitter?.likes || 0,
          platformMetrics.Twitter?.mentions || 0,
          platformMetrics.Twitter?.retweets || 0,
        ],
        backgroundColor: ["#4caf50", "#2196f3", "#ff5722"],
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 15,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className={styles.engagementContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>Engagement & Interaction Dashboard</h1>
        <div className={styles.brandSelector}>
          <label htmlFor="brandInput">Select Brand:</label>
          <input
            id="brandInput"
            type="text"
            placeholder="Enter brand name (e.g., SpaceX)"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />
        </div>
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      {/* Top Charts Section */}
      <div className={styles.topCharts}>
        {/* Donut Chart */}
        <div className={styles.chartBox}>
          <h3>Total Comments</h3>
          <Doughnut data={donutData} options={chartOptions} />
        </div>

        {/* Bar Graph */}
        <div className={styles.chartBox}>
          <h3>Engagement Overview</h3>
          <Bar data={engagementBarData} options={chartOptions} />
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => setShowGraphs(!showGraphs)}
        >
          <h2 className={styles.sectionTitle}>Data Visualizations</h2>
          <button>{showGraphs ? "-" : "+"}</button>
        </div>
        {showGraphs && (
          <div className={styles.chartsGrid}>
            <Charts
              trendsData={trendsData}
              influencersData={influencersData}
              platformMetrics={platformMetrics}
            />
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => setShowComments(!showComments)}
        >
          <h2 className={styles.sectionTitle}>Unanswered Comments & DMs</h2>
          <button>{showComments ? "-" : "+"}</button>
        </div>
        {showComments && <UnansweredComments />}
      </div>

      <div className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => setShowInfluencers(!showInfluencers)}
        >
          <h2 className={styles.sectionTitle}>Top Influencers</h2>
          <button>{showInfluencers ? "-" : "+"}</button>
        </div>
        {showInfluencers && <InfluencerMentions />}
      </div>

      <div className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => setShowMentions(!showMentions)}
        >
          <h2 className={styles.sectionTitle}>Mentions & Tags</h2>
          <button>{showMentions ? "-" : "+"}</button>
        </div>
        {showMentions && (
          <div className={styles.cardsContainer}>
            {feedItems.length > 0 ? (
              feedItems.map((item) => <SocialCard key={item.id} item={item} />)
            ) : (
              <div>No data available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
