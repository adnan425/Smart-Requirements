import React from "react";

export default function Banner({ list: lists }) {
  return (
    <>
      {lists &&
        lists.map((list) => {
          return (
            <div class="listing-slider-one-item d-flex">
              <div class="row align-content-center">
                <div class="col-md-5 col-12 d-flex align-items-center">
                  <div class="listing-slider-left-column">
                    <img src={list.img} alt={list.heading} />
                  </div>
                </div>
                <div class="col-md-7 col-12">
                  <div class="listing-slider-right-column">
                    <h2 class="orange-color">{list.heading}</h2>
                    <ul>
                      { list.points && list.points.map((point) => {
                        return <li key={point.point_id}> {point.point_text} </li>;
                      })} 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
