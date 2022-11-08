import React from "react";
import Banner from "../common/Banner";

export default function Output() {
  const outputList = [
    {
      id: 1,
      heading: "Take Charge Of Your Business Management",
      img: "assets/images/cmmsgo-image2.png",
      points: [
        {
          points_id: 1,
          point_text:
            "Manage your purchases, assets, sales and maintenance with ease.",
        },
        {
          points_id: 2,
          point_text:
            "Outsource parts and manage locations and vendors with a single tool.",
        },
        {
          points_id: 3,
          point_text:
            "Gain control over access, grant permissions, and assign roles to team members.- whenever you want.",
        },
      ],
    },
    {
      id: 2,
      heading: "Spend Less Money On Your Maintenance Operations",
      img: "assets/images/cmmsgo-image2.png",
      points: [
        {
          points_id: 1,
          point_text:
            "Get the right thing done at the right time - at no extra charges.",
        },
        {
          points_id: 2,
          point_text:
            "Outsource parts and manage locations and vendors with a single tool.",
        },
        {
          points_id: 3,
          point_text:
            "Gain control over access, grant permissions, and assign roles to team members.- whenever you want.",
        },
      ],
    },
    {
      id: 3,
      heading: "Manage Your Team Operations Easily",
      img: "assets/images/cmmsgo-image2.png",
      points: [
        {
          points_id: 1,
          point_text:
            "Get the right thing done at the right time - at no extra charges.",
        },
        {
          points_id: 2,
          point_text:
            "Outsource parts and manage locations and vendors with a single tool.",
        },
        {
          points_id: 3,
          point_text:
            "Gain control over access, grant permissions, and assign roles to team members.- whenever you want.",
        },
      ],
    },
  ];
  return (
    <section class="slider-with-listing dark-back">
      <div class="container">
        <div class="title_wrapper">
          <h1 class="main_title">
            Smart Req<span> YOUR PRODUCTIVITY AND OUTPUT</span>
          </h1>
        </div>
        <div class="listing-slider-one">
          <Banner list={outputList} />
        </div>
      </div>
    </section>
  );
}
