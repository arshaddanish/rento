import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import './customerInfo.scss'

const CustomerInfo = ({trigger, setTrigger}) => {
  return(trigger)? (
    <div className='customer-info-main'>
        <div className='customer-info-sub'>
        <div
          onClick={() => setTrigger(false)}
          className="edit-profile-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >Month</TableCell>
                  <TableCell >Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell > January
                    </TableCell>
                    <TableCell >
                        Rs. 2000/-
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  ):null
}

export default CustomerInfo