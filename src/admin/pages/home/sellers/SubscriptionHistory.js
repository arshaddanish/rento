import React from "react";
import "./FormPopUp.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const SubscriptionHistory = ({
  trigger,
  setTrigger,
  selectedSubscriptions: s,
  selectedPlans: p,
}) => {
  console.log(s, p);
  return trigger ? (
    <div className="form-popup-main">
      <div className="form-popup">
        <div onClick={() => setTrigger(false)} className="form-popup-close-btn">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="popup-content">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >Subscription Date</TableCell>
                  <TableCell >End Date</TableCell>
                  <TableCell >Plan</TableCell>
                  <TableCell >Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {s.map((row, index) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell >
                      {row.subDate.substring(0, 10)}
                    </TableCell>
                    <TableCell >
                      {row.endDate.substring(0, 10)}
                    </TableCell>
                    <TableCell >{p[index].name}</TableCell>
                    <TableCell >{p[index].amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  ) : null;
};

export default SubscriptionHistory;
