import React, { useState } from "react";
import Addnewpackege from "../AddnewPackege/Addnewpackege";
import Allbooking from "../Allbooking/allbooking";
import Mybooking from "../Mybooking/Mybooking";
const Admin = () => {
  const [state, setState] = useState("Allbooking");

  
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setState("Addnewpackege")}
                    className="admin-menu p-2"
                  >
                    Addnewpackege
                  </li>
                  <li
                    onClick={() => setState("Allbooking")}
                    className="admin-menu p-2"
                  >
                    Allbooking
                  </li>
                  <li
                    onClick={() => setState("Mybooking")}
                    className="admin-menu p-2"
                  >
                    Mybooking
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {state === "Allbooking" && <Allbooking></Allbooking>}
              {state === "Mybooking" && <Mybooking></Mybooking>}
              {state === "Addnewpackege" && <Addnewpackege></Addnewpackege>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;