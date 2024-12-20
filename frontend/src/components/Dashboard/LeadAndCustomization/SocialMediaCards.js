import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";
import styles from "/src/styles/Leads/Socialmediacard.module.css";

const API_URL = "http://localhost:8000";

const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const deleteUser = async (email) => {
  try {
    const response = await fetch(`${API_URL}/users/${email}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const SocialMediaCards = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsersData = async () => {
      const data = await fetchUsers();
      const usersWithImages = data.map((user) => ({
        ...user,
        image: `https://i.pravatar.cc/150?img=${Math.floor(
          Math.random() * 70
        ) + 1}`,
      }));
      setUsers(usersWithImages);
    };

    getUsersData();
  }, []);

  const groupedUsers = users.reduce((acc, user) => {
    if (!acc[user.platform]) {
      acc[user.platform] = [];
    }
    acc[user.platform].push(user);
    return acc;
  }, {});

  const platformIcons = {
    LinkedIn: FaLinkedin,
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    YouTube: FaYoutube,
  };

  const platformColors = {
    LinkedIn: "#0077B5",
    Facebook: "#1877F2",
    Instagram: "#C13584",
    YouTube: "#FF0000",
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = async (email) => {
    const result = await deleteUser(email);
    if (result) {
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.email !== email)
      );
      setSelectedUser(null);
    }
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  const handleAddUser = (platform) => {
    alert(`Add user for ${platform}`);
  };

  return (
    <div className={styles["social-media-cards"]}>
      <div className={styles["card-header"]}>
        <HiOutlineFilter className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" />
        <span className="text-blue-600">Customization Lead Management</span>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className={styles["platforms-container"]}>
        <div className={styles["platforms-grid"]}>
          {Object.keys(groupedUsers).map((platform) => {
            const Icon = platformIcons[platform] || FaLinkedin;
            const color = platformColors[platform] || "#0077B5";

            return (
              <div
                key={platform}
                className={styles["individual-platform"]}
                style={{ borderColor: color, backgroundColor: color }}
              >
                <div className={styles["platform-header"]}>
                  {/* Platform title and icon */}
                  <div className="flex items-center gap-2">
                    <Icon style={{ color: "white", fontSize: "1.5rem" }} />
                    <span style={{ color: "white" }} className="font-semibold">
                      {platform}
                    </span>
                  </div>

                  {/* Plus button on the right */}
                  <button
                    onClick={() => handleAddUser(platform)}
                    className={styles["add-button"]}
                    style={{ backgroundColor: "white", color: color }}
                  >
                    <FaPlus className="h-5 w-5" />
                  </button>
                </div>

                <div className={styles["platform-users"]}>
                  {groupedUsers[platform].map((user) => (
                    <div
                      key={user.email}
                      className={styles["user-card"]}
                      onClick={() => handleSelectUser(user)}
                    >
                      <div className={styles["user-info"]}>
                        <img
                          src={user.image}
                          alt={user.name}
                          className="h-8 w-8 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-sm text-gray-600">{user.phone}</p>
                          <p className="text-sm text-gray-600">{user.location}</p>
                          <span
                            className={`${styles["priority-badge"]} ${styles[user.priority.toLowerCase()]}`}
                          >
                            {user.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedUser && (
        <div className={styles["popup-overlay"]}>
          <div className={styles["popup-content"]}>
            <button className={styles["close-btn"]} onClick={closePopup}>
              <FaTimes />
            </button>
            <div className={styles["user-info"]}>
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="h-12 w-12 rounded-full"
              />
              <h2>{selectedUser.name}</h2>
              <p>{selectedUser.email}</p>
              <p>{selectedUser.platform}</p>
            </div>
            <button
              className={styles["delete-btn"]}
              onClick={() => handleDeleteUser(selectedUser.email)}
            >
              Delete User
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaCards;
