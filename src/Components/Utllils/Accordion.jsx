import React from "react";

export default function Accordion({id = "accordionExample", title="FR", description=""}) {
  return (
    <div className="accordion accordion-flush" id="accordionExample">
      <div className="accordion-item card">
        <h2 className="accordion-header" id={`#${id}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="false"
            aria-controls="collapse1"
          >
            <span className="d-flex align-items-center">
              <i className="ti ti-credit-card text-primary"></i> {title}
            </span>
          </button>
        </h2>
        <div
          id="collapse1"
          className="accordion-collapse collapse"
          aria-labelledby={`#${id}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="row">
              <div className="col-12 py-2">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
