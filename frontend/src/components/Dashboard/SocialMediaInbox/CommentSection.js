  'use client';
  import { useState, useEffect } from "react";
  import { Box, Avatar, Typography } from '@mui/material';
  import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
  import { FaComments, FaSearch, FaLinkedin, FaFacebook, FaReply, FaShare, FaFlag } from "react-icons/fa";
  import "../../../styles/SocialInbox/CommentSection.css";

  const CommentSection = () => {
    const [comments, setComments] = useState([
      {
        id: 1,
        author: "Cameron Williamson",
        text: "Congrats on the recent award! Well-deserved recognition! 🎉🎉",
        avatar: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        platform: "LinkedIn",
        messageType: "comment",
        timestamp: new Date().toLocaleString(),
        likes: 77,
        priority: 'high',
        replies: [
          {
            id: 11,
            author: "Gen Ai",
            text: "Amazing to see your growth! Can't wait to see what's next!",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFx6kzWPUb4Uv5ENgQNJvf-iP2WtuCoz8gA&s",
            priority: 'medium'
          }
        ]
      },
      {
        id: 2,
        author: "Gen Ai HR",
        text: "InnovateAI is a cutting-edge technology firm specializing in artificial intelligence solutions.",
        image: "https://t3.ftcdn.net/jpg/08/95/96/56/240_F_895965612_scBvcUMUOh7a2qXfNrFhuNmbDs8AtgWH.jpg",
        avatar: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        platform: "Facebook",
        messageType: "mention",
        timestamp: new Date().toLocaleString(),
        priority: 'low',
        replies: [
          {
            id: 21,
            author: "Gen Ai",
            text: "Amazing to see your growth! Can't wait to see what's next!",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFx6kzWPUb4Uv5ENgQNJvf-iP2WtuCoz8gA&s",
            priority: null
          }
        ]
      }
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredComments, setFilteredComments] = useState(comments);
    const [replyingTo, setReplyingTo] = useState(null);
    const [newReplyText, setNewReplyText] = useState("");
    const [likedComments, setLikedComments] = useState({});

    const handleLike = (commentId) => {
      setLikedComments(prev => {
        const isCurrentlyLiked = prev[commentId];
        return { ...prev, [commentId]: !isCurrentlyLiked };
      });

      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId 
            ? { 
                ...comment, 
                likes: (comment.likes || 0) + (likedComments[commentId] ? -1 : 1) 
              }
            : comment
        )
      );
    };

    const handleReply = (commentId) => {
      setReplyingTo(replyingTo === commentId ? null : commentId);
      setNewReplyText("");
    };

    const handleShare = (comment) => {
      if (navigator.share) {
        navigator.share({
          title: `Comment by ${comment.author}`,
          text: comment.text,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(`${comment.author}: ${comment.text}`);
        alert("Comment link copied to clipboard!");
      }
    };

    const submitReply = (commentId) => {
      if (!newReplyText.trim()) return;
    
      const newReply = {
        id: Date.now(),
        author: "Current User",
        text: newReplyText,
        avatar: "https://example.com/default-avatar.png",
        priority: null
      };

      setComments(prevComments =>
        prevComments.map(comment =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [...(comment.replies || []), newReply]
              }
            : comment
        )
      );

      setNewReplyText("");
      setReplyingTo(null);
    };

  const handlePriorityChange = (commentId, replyId = null) => {
    setComments(prevComments => {
      return prevComments.map(comment => {
        if (replyId === null && comment.id === commentId) {
          const priorities = ['high', 'medium', 'low', null];
          const currentIndex = priorities.indexOf(comment.priority);
          const nextPriority = priorities[(currentIndex + 1) % priorities.length];
          return { ...comment, priority: nextPriority };
        }
        if (replyId && comment.replies) {
          const updatedReplies = comment.replies.map(reply => {
            if (reply.id === replyId) {
              const priorities = ['high', 'medium', 'low', null];
              const currentIndex = priorities.indexOf(reply.priority);
              const nextPriority = priorities[(currentIndex + 1) % priorities.length];
              return { ...reply, priority: nextPriority };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
    });
  };

  useEffect(() => {
    const results = comments.filter(comment => 
      comment.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComments(results);
  }, [searchTerm, comments]);

  return (
    <div className="cards-container" style={{ height: "calc(100vh - 40px)" }}>
      <div className="background-card">
        <div className="comment-section-card">
          <div className="header">
            <div className="header-title">
              <FaComments className="header-icon" />
              <span>Comments</span>
            </div>
          </div>
          <div className="comments-container">
            {filteredComments.map((comment) => (
              <div key={comment.id}>
                <div className={`comment-thread ${comment.replies?.length ? 'has-replies' : ''}`}>
                  <div className="avatar-column">
                    <Avatar src={comment.avatar} alt={comment.author} />
                  </div>
                  <div className="content-column">
                    <div className="comment-card">
                      <div className="comment-header-container">
                        <div className="author-info">
                        <Typography variant="subtitle1" className="comment-header" style={{ fontWeight: 'bold' }}>
                          {comment.author}
                        </Typography>

                          <div className="platform-icon">
                            {comment.platform === 'LinkedIn' ? <FaLinkedin /> : <FaFacebook />}
                            <span>{comment.platform}</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography className="comment-text">{comment.text}</Typography>
                        <FaFlag 
                          onClick={() => handlePriorityChange(comment.id)}
                          style={{
                            color: comment.priority === 'high' ? '#ff4444' : 
                                   comment.priority === 'medium' ? '#4CAF50' :
                                   comment.priority === 'low' ? '#FFD700' : '#757575',
                            cursor: 'pointer'
                          }}
                          className="flag-icon"
                        />
                      </div>
                      {comment.image && (
                        <Box mt={1}>
                          <img
                            src={comment.image}
                            alt="Post"
                            style={{ 
                              width: '100%',
                              height: '80px',
                              borderRadius: 8,
                              objectFit: 'cover'
                            }}
                          />
                        </Box>
                      )}

                      <div className="icons-container">
                        <div className="icon-group" onClick={() => handleLike(comment.id)}>
                          <ThumbUpAltIcon fontSize="small" />
                          <span>{comment.likes || 0}</span>
                        </div>
                        <div className="icon-group" onClick={() => handleReply(comment.id)}>
                          <FaReply />
                          <span>Reply</span>
                        </div>
                        <div className="icon-group" onClick={() => handleShare(comment)}>
                          <FaShare />
                          <span>Share</span>
                        </div>
                      </div>
                      {replyingTo === comment.id && (
                        <div className="reply-input-container">
                          <input
                            type="text"
                            value={newReplyText}
                            onChange={(e) => setNewReplyText(e.target.value)}
                            placeholder="Write a reply..."
                            className="reply-input"
                          />
                          <button onClick={() => submitReply(comment.id)} className="reply-submit">
                            Send
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {comment.replies && comment.replies.map((reply) => (
                  <div key={reply.id} className="reply-thread">
                    <div className="avatar-column">
                      <Avatar src={reply.avatar} alt={reply.author} />
                    </div>
                    <div className="content-column">
                      <div className="comment-card">
                        <div className="comment-header-container">
                          <div className="author-info">
                          <Typography className="comment-header" style={{ fontWeight: 'bold' }}>
                            {reply.author}
                          </Typography>

                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
                          <Typography className="comment-text">{reply.text}</Typography>
                          <FaFlag 
                            onClick={() => handlePriorityChange(comment.id, reply.id)}
                            style={{
                              color: reply.priority === 'high' ? '#ff4444' : 
                                     reply.priority === 'medium' ? '#4CAF50' :
                                     reply.priority === 'low' ? '#FFD700' : '#757575',
                              cursor: 'pointer'
                            }}
                            className="flag-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="search-bar">
            <div className="search-input-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search comments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="run-button">Run</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;