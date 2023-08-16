import React from "react";
import { Link } from "react-router-dom";

const BgTitle = ({ title }) => {
  return (
    <>
      <div
        className="breadcrumb-area"
        style={{
          backgroundImage: " url(/bg/pagetitle.jpg)",
        }}
      >
        <div className="container">
          <div className="breadcrumb-wrapper">
            <h1>{title}</h1>
            <div>
              <ul className="breadcrumb">
                <li className="breadcrumb__item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb__item breadcrumb__item--active">
                  {title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgTitle;
