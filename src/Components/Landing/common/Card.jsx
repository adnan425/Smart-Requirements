import React from "react";

export default function Card({ lists }) {
  return (
    <>
      {lists &&
        lists.map((list) => {
          return (
            <div
              class="col-xl-4 col-lg-4 col-md-4 features_card_wrap"
              key={list.id}
            >
              <div class="features_card">
                <div class="card_title">
                  <h2 class="title">{list.heading}</h2>
                </div>
                <div class="description_text">
                  <p>{list.description}</p>
                </div>
                <div class="card_btn_wrapper">
                  <a href="#content1" class="card_btn">
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
