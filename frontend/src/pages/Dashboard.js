// "use client";

// import React, { useState } from "react";
// import { useRouter } from 'next/router'; // Import useRouter
// import DashboardCard from "../components/DashboardCard"; // Reusable DashboardCard component
// import styles from "../styles/Dashboard.css";

// // Sample data for the cards
// const totalContentData = [
//   { label: "LinkedIn", value: "32%" },
//   { label: "Facebook", value: "48%" },
//   { label: "Twitter", value: "55%" },
//   { label: "Instagram", value: "88%" },
//   { label: "YouTube", value: "92%" },
// ];

// const industryTrendsData = {
//   labels: ["LinkedIn", "Facebook", "Instagram", "Twitter", "YouTube", "Share Chat"],
//   datasets: [
//     {
//       label: "Content Engagement",
//       data: [74779, 56635, 43887, 19027, 8142, 4918],
//       backgroundColor: ["#3b82f6", "#10b981", "#f472b6", "#3b82f6", "#f43f5e", "#fbbf24"],
//     },
//   ],
// };

// const engagementData = [
//   { label: "Posts", value: "20" },
//   { label: "Comments", value: "70" },
//   { label: "Total", value: "90" },
// ];

// const socialMediaInboxData = [
//   { label: "High-priority messages", value: "60%" },
//   { label: "Messages", value: "40%" },
// ];

// const leadManagementData = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   datasets: [
//     {
//       label: "Total Leads",
//       data: [100, 200, 300, 400, 500, 600, 700],
//       borderColor: "#6366f1",
//       backgroundColor: "rgba(99, 102, 241, 0.5)",
//       tension: 0.4,
//     },
//   ],
// };

// const totalLeads = [
//   { label: "LinkedIn", value: 2203 },
//   { label: "Facebook", value: 320 },
//   { label: "Instagram", value: 321 },
//   { label: "Twitter", value: 562 },
// ];

// const adCampaignData = {
//   labels: ["LinkedIn", "Facebook", "Instagram", "Twitter"],
//   datasets: [
//     {
//       label: "Ad clicks",
//       data: [400, 300, 500, 250],
//       backgroundColor: ["#3b82f6", "#3b82f6", "#f472b6", "#3b82f6"],
//     },
//   ],
// };

// const contentPushData = {
//   labels: ["Low", "Medium", "High"],
//   datasets: [
//     {
//       data: [250, 400, 652],
//       backgroundColor: ["#f87171", "#fbbf24", "#4ade80"],
//     },
//   ],
// };

// export default function Home() {
//   const router = useRouter(); // Initialize the router
//   const [cards, setCards] = useState([
//     { id: 1, title: "Content Integration & Analysis", content: totalContentData, type: "content", totalContent: "2056" },
//     { id: 2, title: "Competitor Insights & Industry Trends", chartData: industryTrendsData, type: "chart" },
//     { id: 3, title: "Engagement & Interaction Feed", content: engagementData, type: "content" },
//     { id: 4, title: "Social Media Inbox", content: socialMediaInboxData, type: "content" },
//     { id: 5, title: "Customization Lead Management", chartData: leadManagementData, type: "chart" },
//     { id: 6, title: "Lead Generation Overview", content: totalLeads, type: "content" },
//     { id: 7, title: "Ad Campaign Performance", chartData: adCampaignData, type: "chart" },
//     { id: 8, title: "Content Scheduler", content: [{ label: "Approved", value: "30%" }, { label: "Published posts", value: "40%" }, { label: "Pending", value: "20%" }, { label: "Scheduled posts", value: "10%" }], type: "content" },
//     { id: 9, title: "Content Push Marketing", chartData: contentPushData, type: "chart" },
//   ]);

//   const items = [
//     { label: 'Company Structure', icon: '📊' },
//     { label: 'Documents', icon: '📄' },
//     { label: 'Rating', icon: '⭐' },
//     { label: 'Calendar', icon: '📅' },
//     { label: 'Messenger', icon: '💬' },
//     { label: 'Feed', icon: '📰' },
//   ];

//   const handleNavigate = (cardId) => {
//     // Navigate to a dynamic route based on the cardId
//     router.push(`/card/${cardId}`);
//   };

//   const onDragStart = (event, cardId) => {
//     event.dataTransfer.setData("cardId", cardId);
//   };

//   const onDrop = (event, dropIndex) => {
//     const draggedCardId = parseInt(event.dataTransfer.getData("cardId"));
//     const draggedCardIndex = cards.findIndex((card) => card.id === draggedCardId);

//     if (draggedCardIndex !== -1) {
//       const updatedCards = [...cards];
//       const [draggedCard] = updatedCards.splice(draggedCardIndex, 1);
//       updatedCards.splice(dropIndex, 0, draggedCard);
//       setCards(updatedCards);
//     }
//   };

//   const onDragOver = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="dashboardContent">
//       <div className="topRow">
//         {/* topbar with title and new post button */}
//         <h1 className="dashboardTitle">Dashboard</h1>
//         <button className="newPostButton">New Post</button>
//       </div>

//       {/* top2bar with items as buttons */}
//     <div className="dash-topbar">
//     {items.map((item, index) => (
//     <button key={index} className="nav-item">
//     <span className="nav-icon">{item.icon}</span>
//     {item.label}
//     </button>
//     ))}
//     </div>


//       {/* Container with cards */}
//       <div className="dashboard-grid">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             draggable
//             onDragStart={(e) => onDragStart(e, card.id)}
//             onDragOver={onDragOver}
//             onDrop={(e) => onDrop(e, index)}
//             className="dashboard-card"
//           >
//             <div className="col-span-2">
//               <h2 className="text-xl font-semibold flex justify-between items-center">
//                 {card.title}
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/7791397c2d578afb3454b14b48d0c501c0b8c4473c950721b28c80792a146df0"
//                   className="object-contain w-6 h-6"
//                   alt="extension"
//                   onClick={() => handleNavigate(card.id)}
//                 />
//               </h2>
//             </div>
//             <div className="col-span-2">
//               <DashboardCard
//                 title={card.title}
//                 content={card.content}
//                 chartData={card.chartData}
//                 type={card.type}
//                 totalContent={card.totalContent}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>  );
// }
