import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddStudent } from "./AddStudent";
import "./App.css";
import { Edit } from "./Edit";
import { Home } from "./Home";
import { View } from "./View";

function App() {
  const [studentDetails, setStudentDetails] = useState([
    {
      name: "MANOJ",
      blood: "A+",
      department: "mech",
      dob: 1995,
    },
    {
      name: "VIRAT",
      blood: "B+",
      department: "mech",
      dob: 1994,
    },
    {
      name: "SACHIN",
      blood: "AB+",
      department: "mechatronics",
      dob: 1993,
    },
    {
      name: "ROHIT",
      blood: "O+",
      department: "EEE",
      dob: 1996,
    },
    {
      name: "SKY",
      blood: "A-",
      department: "CSC",
      dob: 1994,
    },
    {
      name: "GILL",
      blood: "B-",
      department: "mech",
      dob: 1993,
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
              />
            }
          />
          <Route
            path="/add-student"
            element={
              <AddStudent
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
              />
            }
          />
          <Route
            path="/view/:id"
            element={<View studentDetails={studentDetails} />}
          />
          <Route
            path="/edit/:id"
            element={<Edit studentDetails={studentDetails} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
