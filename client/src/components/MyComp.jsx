import React from "react";

const cardData = [
  { title: "Card 1", description: "Description for Card 1" },
  { title: "Card 2", description: "Description for Card 2" },
  { title: "Card 3", description: "Description for Card 3" },
  { title: "Card 4", description: "Description for Card 4" },
  { title: "Card 5", description: "Description for Card 5" },
];

function MyComp() {
  return (
    <>
      <style>
        {`
        .card-row {
  display: flex;
  justify-content: center;
  gap: 22px;
  margin: 40px 0;
}

.custom-card {
  width: 90px;
  min-height: 160px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.09);
  transition: width 0.28s cubic-bezier(.39,.575,.565,1), box-shadow 0.2s;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-card:hover {
  width: 160px;
  box-shadow: 0 10px 32px rgba(0,0,0,0.18);
  z-index: 2;
}

.card-content {
  padding: 16px 5px;
  text-align: center;
}

        `}
      </style>
      <div className="container my-4">
        <div className="row justify-content-center">
          {cardData.map((card, idx) => (
            <div className="col-2 d-flex" key={idx}>
              <div className="custom-card card">
                <div className="card-body text-center">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyComp;
