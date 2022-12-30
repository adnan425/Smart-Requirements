import React, {useEffect,useState} from "react";
import PageHeader from "../Utllils/PageHeader";
import ProfileCard from "../Utllils/ProfileCard";
import http from './../Services/httpService';
export default function Users() {
  const [ users, setUsers ] = useState([]); 
  // console.log(users);
  useEffect(()=>{
    http.get("http://localhost:3004/api/users").then(({data})=>{
      console.log("Managers: ", data);
      setUsers(data);
    }).catch(error =>{
      console.log(error);
      setUsers([]);
    })
  },[])
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
                  return (
                    <>
                      <div className="col-md-3" >
                        <ProfileCard user={user} />
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
