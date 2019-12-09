import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [downs, setDowns] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [toGo, setToGo] = useState(0);
  const [ballOn, setBallOn] = useState(0);

  if (downs === 5) {setDowns(0);}
  if (quarter === 5) {setQuarter(1);}

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{ downs }</div>
        <button onClick={() => setDowns(downs + 1)} className="downButton">Add Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{ toGo }</div>
        <button onClick={() => setToGo(Math.floor(Math.random() * 100))} className="toGoButton">To Go</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ ballOn }</div>
        <button onClick={() => setBallOn(Math.floor(Math.random() * 100))} className="ballOnButton">Ball On</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{ quarter }</div>
        <button onClick={() => setQuarter(quarter + 1)} className="quarterButton">Quarter</button>
      </div>
    </div>
    
  );
};

export default BottomRow;
