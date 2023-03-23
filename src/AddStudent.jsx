import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function AddStudent({ studentDetails, setStudentDetails }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [blood, setBlood] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");

  return (
    <div className="deatils">
      <form className="add-Details">
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          name="age"
          label="Blood Group"
          variant="outlined"
          onChange={(event) => setBlood(event.target.value)}
        />
        <TextField
          name="department"
          label="Department"
          variant="outlined"
          onChange={(event) => setDepartment(event.target.value)}
        />
        <TextField
          name="year"
          label="Date of Birth"
          variant="outlined"
          onChange={(event) => setDob(event.target.value)}
        />
        <Button
          onClick={async () => {
            const newStudent = {
              name: name,
              blood: blood,
              department: department,
              dob: dob,
            };

            await setStudentDetails([...studentDetails, newStudent]);
            console.log(newStudent);
            navigate("/");
          }}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
