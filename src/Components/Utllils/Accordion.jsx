import React from "react";

export default function Accordion({ id = "accordionExample1", title="FR", description=""}) {
  return (
    <div class="accordion-item card">
    <h2 class="accordion-header" id={`heading-${id}`}>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`} >
        <span class="d-flex align-items-center">
          <i class="ti ti-credit-card text-primary"></i> {`${title}`}
        </span>
      </button>
    </h2>
    <div id={`collapse${id}`}  class="accordion-collapse collapse" aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample"  >
      <div class="accordion-body">
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
