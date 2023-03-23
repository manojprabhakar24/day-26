import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { orange } from "@mui/material/colors";

export function Home({ studentDetails, setStudentDetails }) {
  const navigate = useNavigate();
  const { id } = useParams();

  function deleteStudent(index) {
    //console.log(index);
    //const student = studentDetails[index];
    studentDetails.splice(index, 1);
    setStudentDetails([...studentDetails]);
  }
  return (
    <div className="Home">
      <div className="header">
        <h1>STUDENT LIST - CRUD OPERATION</h1>
      </div>
      <div className="add-Student">
        <button
          className="btn1"
          onClick={() => {
            navigate("/add-student");
          }}
        >
          ADD STUDENT
        </button>
      </div>
      <div className="list">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">Name</th>
              <th scope="col">Blood Group</th>
              <th scope="col">department</th>
              <th scope="col">year</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.map((std, index) => (
              <tr key={index} id={index}>
                <th scope="row">{index + 1}</th>
                <td>{std.name}</td>
                <td>{std.blood}</td>
                <td>{std.department}</td>
                <td>{std.dob}</td>
                <td>
                  {
                    <IconButton
                      onClick={() => navigate(`/view/${index}`)}
                      color="primary"
                      aria-label="view"
                    >
                      <RemoveRedEyeRoundedIcon />
                    </IconButton>
                  }
                  {
                    <IconButton
                      onClick={() => navigate(`/edit/${index}`)}
                      sx={{ color: orange[300] }}
                      aria-label="edit"
                    >
                      <BorderColorIcon />
                    </IconButton>
                  }
                  {
                    <IconButton
                      onClick={() => deleteStudent(index)}
                      color="error"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
