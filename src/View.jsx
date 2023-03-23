import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

export function View({ studentDetails }) {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  console.log(studentDetails[id].name);

  return (
    <div>
      <form className="view-Details">
        <TextField
          name="name"
          value={studentDetails[id].name}
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          name="blood"
          value={studentDetails[id].blood}
          label="Blood Group"
          variant="outlined"
          onChange={(event) => setBlood(event.target.value)}
        />
        <TextField
          name="department"
          value={studentDetails[id].department}
          label="Department"
          variant="outlined"
          onChange={(event) => setDepartment(event.target.value)}
        />
        <TextField
          name="year"
          value={studentDetails[id].dob}
          label="Date of Birth"
          variant="outlined"
          onChange={(event) => setDob(event.target.value)}
        />
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="contained"
        >
          Home
        </Button>
      </form>
    </div>
  );
}
