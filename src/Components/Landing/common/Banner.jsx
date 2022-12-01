import React from "react";

export default function Banner({ list: lists }) {
  return (
    <>
      {lists &&
        lists.map((list) => {
          return (
            <div className="listing-slider-one-item d-flex">
              <div className="row align-content-center">
                <div className="col-md-5 col-12 d-flex align-items-center">
                  <div className="listing-slider-left-column">
                    <img src={list.img} alt={list.heading} />
                  </div>
                </div>
                <div className="col-md-7 col-12">
                  <div className="listing-slider-right-column">
                    <h2 className="orange-color">{list.heading}</h2>
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
