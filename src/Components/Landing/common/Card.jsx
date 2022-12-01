import React from "react";

export default function Card({ lists }) {
  return (
    <>
      {lists &&
        lists.map((list) => {
          return (
            <div
              className="col-xl-4 col-lg-4 col-md-4 features_card_wrap"
              key={list.id}
            >
              <div className="features_card">
                <div className="card_title">
                  <h2 className="title">{list.heading}</h2>
                </div>
                <div className="description_text">
                  <p>{list.description}</p>
                </div>
                <div className="card_btn_wrapper">
                  <a href="#content1" className="card_btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
