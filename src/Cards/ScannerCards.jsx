// src/ScannerCards.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Cards.css";

// Define ScannerCard component
function ScannerCard({ title, items }) {
  return (
    <Card className="card-custom">
      <Card.Header className="card-header-custom">{title}</Card.Header>
      <Card.Body className="card-body-custom">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href="#" className="card-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

// Define ScannerCards component
function ScannerCards() {
  const cardsData = [
    {
      title: "Bullish Scanners",
      items: [
        "Golden crossover",
        "MACD Bullish",
        "Hammer Bullish",
        "CCI Bullish",
        "RSI Bullish",
        "ADX Buying",
        "Bullish Marabozu",
      ],
    },
    {
      title: "Futures Scanners",
      items: [
        "Bollinger band breakout",
        "SMA Bullish future",
        "MFI Bearish future",
        "3 indicator bullish future",
        "William % r bearish future",
        "Future bullish based on adx",
        "Future bearish Vwap",
      ],
    },
    {
      title: "Bearish Scanners",
      items: [
        "Death Crossover",
        "MACD Bearish",
        "Bearish Harami",
        "RSI Selling",
        "ADX Selling",
        "Bearish Inverted Hammer",
        "Doji sideways",
      ],
    },
    {
      title: "Candlestick Scanners",
      items: [
        "Bullish Marabozu",
        "Three white soldiers Bullish",
        "Doji buying",
        "Hammer Buying",
        "Three Black Crows",
        "Marabozu bullish",
        "Bullish 3 white soldiers",
      ],
    },
    {
      title: "Options Scanners",
      items: [
        "Golden crossover",
        "MACD Bullish",
        "Hammer Bullish",
        "CCI Bullish",
        "RSI Bullish",
        "ADX Buying",
        "Bullish Marabozu",
      ],
    },
    {
      title: "Top Loved",
      items: [
        "Closest premium bearish based on RSI",
        "Golden crossover",
        "Three Black Crows",
        "3 indicator bullish future",
        "Marabozu bullish",
        "Bearish Inverted Hammer",
        "Doji sideways",
      ],
    },
  ];

  return (
    <div className="cards-container">
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {cardsData.map((card, index) => (
          <Col key={index}>
            <div className="mb-4">
              <ScannerCard title={card.title} items={card.items} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ScannerCards;
