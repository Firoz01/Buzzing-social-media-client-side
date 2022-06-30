
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ShareModal from '../ShareModal/ShareModal';
import TrendCard from '../TrendCard/TrendCard';
import './RightSide.css'


const RightSide = () => {
     const [modalOpened, setModalOpened] = useState(false);
    return (
      <div className="RightSide">
        <Navbar />
        <TrendCard />
        <button
          className="button r-button"
          onClick={() => setModalOpened(true)}
        >
          Share
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>
    );
};

export default RightSide;