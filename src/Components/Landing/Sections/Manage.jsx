import React from "react";

export default function Manage() {
  const keyFutures = [
    {
      id: 1,
      heading: "Dashboard",
      description:
        "Access all your essential information from one place. Manage your total open work orders, PMs, assets and more from a single screen. Use line graphs and pie charts to monitor work orders.",
    },
    {
      id: 2,
      heading: "Calendar",
      description:
        "Manage events and assign dates for different tasks. Use the calendar feature to save important events, get reminders, and easily meet set deadlines.",
    },
    {
      id: 3,
      heading: "Plan",
      description:
        "Get the details of all your purchase orders in one tab. Access expected delivery dates, purchase order dates, vendor names, usernames, and more.",
    },
    {
      id: 4,
      heading: "PMs",
      description:
        "Manage instructions, invoice costs, log times, and service descriptions - all in one place.",
    },
  ];
  return (
    <section class="managing-buss-section">
      <div class="container">
        <div class="section_title_wrapper text-center">
          <h2>
            KEEP YOUR BUSINESS <span>RUNNING</span> LIKE A WELL OILED MACHINE
          </h2>
          <h4>
            CMMSGo - The most <span>reliable</span> way to manage your business
            maintenance.
          </h4>
        </div>
        <div class="managing-staff-slider">
          <div class="managing-staff-item">
            <div class="row">
              {keyFutures.map((futuers) => {
                return (
                  <div class="col-md-4 col-sm-6 col-12 staff-manage-box mb-2" key={futuers.id}>
                    <div class="staff-manage-box-inner">
                      <h3>{futuers.heading}</h3>
                      <p> {futuers.description}  </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
