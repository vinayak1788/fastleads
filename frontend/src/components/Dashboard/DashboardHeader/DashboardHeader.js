"use client";
import { MdAdd, MdWidgets, MdBusiness, MdStar, MdMessage } from "react-icons/md";

const DashboardsubHeader = ({ closedCards = [], onRestoreCard = () => {} }) => {
  const inlineStyles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  };

  return (
    <div>
      <div style={inlineStyles.header}>
        <div>
          <h1>Dashboard</h1>
        </div>
        <div>
          <button style={inlineStyles.button}>
            <MdAdd /> New Post
          </button>
          <div>
            <button>
              <MdWidgets />
            </button>
            <div>
              {closedCards.length > 0 ? (
                closedCards.map((card) => (
                  <div key={card.id} onClick={() => onRestoreCard(card.id)}>
                    {card.title}
                  </div>
                ))
              ) : (
                <div>No closed cards available</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={inlineStyles.header}>
        <div>
          <div style={inlineStyles.button}>
            <MdBusiness />
            <button>Company Structure</button>
          </div>
          <div style={inlineStyles.button}>
            <MdStar />
            <button>Rating</button>
          </div>
        </div>
        <div>
          <div style={inlineStyles.button}>
            <MdMessage />
            <button>Messenger</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardsubHeader;
