import React from 'react';
import Header from '../../components/Header';
import './style.scss';

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="home-page-content">
        <div className="title-one">
          <h4>Your Blocks:</h4>
        </div>
      </div>
    </div>
  );
}
