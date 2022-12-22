import React from "react";

export default function Accordion({ id = "accordionExample1", title="FR", description=""}) {
  return (
    <div className="accordion-item card">
    <h2 className="accordion-header" id={`heading-${id}`}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`} >
        <span className="d-flex align-items-center">
          <i className="ti ti-credit-card text-primary"></i> {`${title}`}
        </span>
      </button>
    </h2>
    <div id={`collapse${id}`}  className="accordion-collapse collapse" aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample"  >
      <div className="accordion-body">
         <div className="row">
          <div className="col-md-12">
            <p>{description}</p>
          </div>
         </div>
      </div>
    </div>
  </div>
  );
}
