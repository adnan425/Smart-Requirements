import React from "react";
import PageHeader from "../Utllils/PageHeader";
import ProfileCard from "../Utllils/ProfileCard";

export default function Users() {
  const users = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 }
  ]
  return (
    <div className="page-content">
      {/* <!-- [ Main Content ] start --> */}
      <div className="dash-container">
        <div className="dash-content">
          {/* <!-- [ breadcrumb ] start --> */}
          <PageHeader title="Users" />

          {/* <!-- <div className="row"> --> */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                {users && users.map(user => {
                  // const { _id  } = user;
                  return (
                    <>
                      <div className="col-md-3">
                        <ProfileCard />
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>

          {/* <!-- </div> --> */}
        </div>
      </div>
      {/* <!-- [ Main Content ] end --> */}
    </div>
  );
}
