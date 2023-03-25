import React from "react";

export default function Accordion({ id = "accordionExample1", title = "FR", description = "" }) {
  return (
    <div className="accordion-item card">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`} >
          <span className="d-flex align-items-center">
            <i className="ti ti-credit-card text-primary"></i> {`${title}`}  
          </span> 
        </button>

      </h2>
      <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample"  >
        <div className="accordion-body">
          <div className="row">
            <div className="col-md-12">
              <p>{description}</p>
              {/* <p><b>Written by:</b> <br/> <b>Written at:</b> </p>
              <p style={{color:'red'}} ><b>If requirement is uncleared, check the below status and mark it</b></p>
              <span style={{display: 'inline-block'}}>
              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option value="1">Pending</option>
              <option value="2">Started</option>
              <option value="3">Completed</option>
            </select>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
