
export default function PageTitle({ title = " Title", description = "", children }) {
  return (
    <div className="row">
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{title}</h5><small className="text-muted">{description}</small>
            </div>
            <div className="float-end">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
