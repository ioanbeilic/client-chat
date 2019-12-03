import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <h1 className="">Join</h1>
        <div className="card">
          <div className="card-header">
            <h3>Join</h3>
          </div>

          <div className="card-body">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Name"
                type="text"
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Room"
                type="text"
                onChange={event => setRoom(event.target.value)}
              />
            </div>
            <div className="form-group">
              <Link
                onClick={e => (!name || !room ? e.preventDefault() : null)}
                to={`/chat?name=${name}&room=${room}`}
              >
                <button className="btn float-right login_btn" type="submit">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
