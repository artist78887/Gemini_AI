import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello,Akash.</span>
            </p>
            <p>How I Can Help You Today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places too see on an upcoming road trip.</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept:urban planning.</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>BrainStrome team bonding activities for our work .</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Improve the readability of the follwing code.</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Main;
