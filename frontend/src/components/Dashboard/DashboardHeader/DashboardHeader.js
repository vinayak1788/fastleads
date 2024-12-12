import React from 'react';
import Image from 'next/image';

export default function Page() {
  // Top row navigation with "Dashboard" on the left and "New Post" on the right
  const navigationTop = [
    {
      label: "Dashboard",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb0e158bca254f394363e9838c588e176ffeeeef56f1c599fb32fae0abf845f?placeholderIfAbsent=true&apiKey=c20b4089c62f47e3b73547d56c34685d",
    },
    {
      label: "New Post",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/226da273c6c6eed92fdf348465adc771372b8dcce516b4f1b4a4ccd5d3e600fe?placeholderIfAbsent=true&apiKey=c20b4089c62f47e3b73547d56c34685d",
    },
  ];

  // Left row navigation
  const navigationLeft = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8e2fb753990f8ad9948746a20a440148dcb173e12c17c2be1a6d94337567211?placeholderIfAbsent=true&apiKey=c20b4089c62f47e3b73547d56c34685d",
      label: "Company Structure",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb0e158bca254f394363e9838c588e176ffeeeef56f1c599fb32fae0abf845f?placeholderIfAbsent=true&apiKey=c20b4089c62f47e3b73547d56c34685d",
      label: "Rating",
    },
    {
      label: "Widget",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb0e158bca254f394363e9838c588e176ffeeeef56f1c599fb32fae0abf845f?placeholderIfAbsent=true&apiKey=c20b4089c62f47e3b73547d56c34685d",
    },
  ];

  // Right row navigation for Calendar, Messenger, and Feed
  const navigationRight = [
    {
      label: "Calendar",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/226da273c6c6eed92fdf348465adc771372b8dcce516b4f1b4a4ccd5d3e600fe?placeholderIfAbsent=true&apiKey=c20b4089c62f47e3b73547d56c34685d", // Calendar icon
    },
    {
      label: "Messenger",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd1976aebdd38c57c3fcb71f230e7b9968eef97afc167c90097a8803e6c5fcf7?placeholderIfAbsent=true&apiKey=c20b4089c62f47e3b73547d56c34685d",
    },
    {
      label: "Feed",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/226da273c6c6eed92fdf348465adc771372b8dcce516b4f1b4a4ccd5d3e600fe?placeholderIfAbsent=true&apiKey=c20b4089c62f47e3b73547d56c34685d",
    },
  ];

  const NavigationButton = ({ icon, label }) => {
    return (
      <button className="button">
        <div className="buttonContent">
          {icon && (
            <Image
              src={icon}
              alt=""
              width={20}
              height={20}
              className="icon"
            />
          )}
          <span className="label">{label}</span>
        </div>
      </button>
    );
  };

  return (
    <div className="topheader-container">
      {/* Top Row: Dashboard on left, New Post on right */}
      <div className="topRow">
        <div className="navigationTop">
          {navigationTop.map((item, index) => (
            <NavigationButton
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>

      {/* Main Row: Left and Right Sections in the same row */}
      <div className="mainRow">
        <div className="leftSection">
          {navigationLeft.map((item, index) => (
            <NavigationButton
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>

        <div className="rightSection">
          {navigationRight.map((item, index) => (
            <NavigationButton
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
       .topheader-container {
          
         
          width: 100%;
          height: 100%;
          padding: 2px;
          
        
          flex-direction: column;
          
        }

        .topRow {
          display: flex;
          justify-content: space-between;
        padding: 5px;
         
          border-radius: 10px;
          
          border: 1px solid black;
        }

        .navigationTop {
          display: flex;
          
          margin-bottom:0px;
          justify-content: space-between;
          width: 100%;
        }

        .mainRow {
          margin-top:0px;
          display: flex;
          border: 1px solid black;
          padding: 5px;
          border-radius: 10px;
          justify-content: space-between;
          margin-top: 16px;

        }

        .leftSection,
        .rightSection {
          display: flex;
         
         justify-content: space-between;
          gap: 12px;
        }

        .button {
          border-radius: 20px;
          
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
          display: flex;
          min-height: 36px;
          align-items: center;
          
          
          white-space: nowrap;
          cursor: pointer;
        }

        .buttonContent {
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: space-between;
          
         
        }

        .icon {
        
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
        }

        .label {
        
         
          text-transform: capitalize;
          font: 500 14px Poppins, sans-serif;
        }
      `}</style>
    </div>
  );
}
