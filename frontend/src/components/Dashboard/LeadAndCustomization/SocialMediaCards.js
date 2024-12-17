"use client";
import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlinePlus, HiOutlineFilter } from "react-icons/hi";

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
    "X Twitter": () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M23.89 3.54L13.48 12l10.41 8.46c.2.17.2.48 0 .64l-2.07 1.67c-.2.16-.52.16-.71 0L12 14.67 2.47 22.77c-.19.16-.51.16-.71 0L-.31 22.1c-.19-.16-.19-.48 0-.64L9.88 12-.31 3.54c-.2-.17-.2-.48 0-.64l2.07-1.67c.2-.16.52-.16.71 0L12 9.33l9.53-7.1c.19-.16.51-.16.71 0l2.07 1.67c.19.16.19.48 0 .64z" />
      </svg>
    ),
    Instagram: FaInstagram,
    YouTube: FaYoutube,
  };

  const platformColors = {
    LinkedIn: "#0077B5",
    Facebook: "#1877F2",
    "X Twitter": "#000000", // Black for "X"
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
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <HiOutlineFilter className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" />
        <span className="text-blue-600">Customization Lead Management</span>
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.keys(groupedUsers).map((platform) => {
              const Icon = platformIcons[platform] || FaLinkedin;
              const color = platformColors[platform] || "#0077B5";

              return (
                <div key={platform} className="space-y-4">
                  <div
                    className="p-4 flex justify-between items-center rounded-lg"
                    style={{ backgroundColor: color }}
                  >
                    <div
                      className="flex items-center gap-2 text-white cursor-pointer hover:opacity-90"
                      title={`Go to ${platform}`}
                    >
                      <Icon
                        className="transition-transform transform hover:scale-110"
                        style={{ fontSize: "1.5rem" }}
                      />
                      <span>{platform}</span>
                    </div>
                    <button
                      onClick={() => handleAddUser(platform)}
                      className="text-white rounded-full p-2 transition-transform transform hover:scale-110"
                      style={{
                        backgroundColor: color,
                        boxShadow: `0px 2px 5px ${color}`,
                      }}
                      aria-label={`Add user for ${platform}`}
                    >
                      <HiOutlinePlus className="h-5 w-5" />
                    </button>
                  </div>

                  <div>
                    {groupedUsers[platform].map((user, idx) => (
                      <div
                        key={idx}
                        className="mb-4 cursor-pointer hover:bg-gray-100 rounded-lg relative"
                        onClick={() => handleSelectUser(user)}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={user.image}
                            alt={user.name}
                            className="h-10 w-10 rounded-full"
                          />
                          <div>
                            <p className="font-medium">{user.name}</p>
                          </div>
                          <button
                            className="absolute top-2 right-2 text-sm text-gray-500"
                            aria-label="More options"
                          >
                            <FiMoreVertical className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600 mt-2">
                          <p>📧 {user.email}</p>
                          <p>📞 {user.phone}</p>
                          <p>📍 {user.location}</p>
                          <p>⭐ {user.priority}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 max-w-full">
            <h3 className="text-lg font-semibold mb-4">User Details</h3>
            <div className="flex items-center gap-4">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="h-16 w-16 rounded-full"
              />
              <div>
                <p className="font-medium">{selectedUser.name}</p>
                <p className="text-sm text-gray-500">{selectedUser.email}</p>
                <p className="text-sm text-gray-500">{selectedUser.phone}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
                onClick={() => handleDeleteUser(selectedUser.email)}
              >
                Delete User
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaCards;
