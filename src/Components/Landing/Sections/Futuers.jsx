import React from "react";
import Card from "./../common/Card";

export default function Futuers() {
  const futuersList = [
    {
      id: 1,
      heading: "Make your customers happy",
      description:
        "omplete orders on time and keep your customers satisfied. Manage your team efficiently and ensure they take the right resources to job sites. Cut down onvtime wasted retrieving information, and boost employee output.",
    },
    {
      id: 2,
      heading: "Increase safety compliance",
      description:
        "Easily monitor your equipment and ensure they meet office safety compliance standards. Prevent injuries, risks and equipment accidents. Use a single tool to  keep track of all equipment and  ensure they are in peak shape.",
    },
    {
      id: 3,
      heading: "Focus on the right tasks",
      description:
        "Avoid unnecessary delays by focusing on scheduled maintenance. Use an automated process to access information, manage orders on the go, and boost your productivity levels.",
    },
  ];
  return (
    <section class="features_card_sec pb-76px" id="content1">
      <div class="container">
        <div class="section_title_wrapper extra_section_title_wrapper">
          <h1 class="main_title extra_features">
            All The Maintenance Management Features You Need - In One Single
            Tool
          </h1>
        </div>
        <div class="row">
          <Card lists={futuersList} />
        </div>
      </div>
    </section>
  );
}
