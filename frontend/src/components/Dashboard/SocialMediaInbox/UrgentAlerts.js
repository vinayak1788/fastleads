import { useState } from "react";
import { FaBell, FaUser, FaRobot, FaFlag, FaPaperPlane } from "react-icons/fa";
import "../../../styles/SocialInbox/UrgentAlerts.module.css";

const messages = [
  {
    id: 1,
    name: 'Cameron Williamson',
    avatar: '/images/user-avatar.png',
    message: 'Thank you for your message.',
    aiResponse: false,
    priority: 'high'
  },
  {
    id: 2,
    name: 'Gen Ai',
    avatar: '/images/ai-avatar.png',
    message: 'I will get back to you as soon as possible.',
    aiResponse: true,
    priority: 'medium'
  },
];

const UrgentAlerts = () => {
  const [messagesList, setMessagesList] = useState(messages);
  const [newMessage, setNewMessage] = useState('');

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#ff4444';
      case 'medium':
        return '#00C851';
      case 'low':
        return '#ffbb33';
      default:
        return '#757575';
    }
  };

  const handleFlagClick = (messageId) => {
    setMessagesList(prevMessages => 
      prevMessages.map(msg => {
        if (msg.id === messageId) {
          const priorities = ['high', 'medium', 'low', null];
          const currentIndex = priorities.indexOf(msg.priority);
          const nextIndex = (currentIndex + 1) % priorities.length;
          return { ...msg, priority: priorities[nextIndex] };
        }
        return msg;
      })
    );
  };

  const conversationPairs = [];
  for (let i = 0; i < messagesList.length; i += 2) {
    if (i + 1 < messagesList.length) {
      conversationPairs.push([messagesList[i], messagesList[i + 1]]);
    } else {
      conversationPairs.push([messagesList[i]]);
    }
  }

  return (
    <div className="urgent-alerts-wrapper">
      <div className="urgent-alerts-container">
        <div className="alerts-topbar">
          <div className="topbar-left">
            <FaBell className="bell-icon" />
            <h2 className="heading">Urgent Alerts !</h2>
          </div>
        </div>
        
        <div className="alerts-list">
          <div className="message-container">
            {messagesList.map((message, index) => (
              <div key={message.id} className="message-group">
                <div className={`message ${message.aiResponse ? 'ai-message' : 'user-message'}`}>
                  <div className="avatar-line-container">
                    <img 
                      src={message.avatar} 
                      alt={message.name} 
                      className="avatar-image"
                    />
                    {index < messagesList.length - 1 && <div className="continuous-line"></div>}
                  </div>
                  <div className={`message-box ${message.aiResponse ? 'ai' : ''}`}>
                    <div className="message-header">
                      <div className="message-name">{message.name}</div>
                      <FaFlag 
                        className="priority-flag"
                        style={{ color: getPriorityColor(message.priority) }}
                        onClick={() => handleFlagClick(message.id)}
                      />
                    </div>
                    <div>{message.message}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="message-input-container">
          <input 
            type="text" 
            className="message-input" 
            placeholder="Type your message here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="send-button">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgentAlerts;