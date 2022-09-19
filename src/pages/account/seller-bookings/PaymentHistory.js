import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, TextField } from '@mui/material';
import './paymentHistory.scss'

const PaymentHistory = ({trigger, setTrigger}) => {

  return(trigger)? (
    <div className='payment-hostory-main'>
        <div className="payment-hostory-sub">
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
                  <TableCell ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell > January
                    </TableCell>
                    <TableCell >
                        
                        <TextField id="standard-basic" label="Amount" variant="standard" />
                    </TableCell>
                    <TableCell align='right' >
                        <Button color='success' variant="contained">Confirm</Button>
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  ):null
}

export default PaymentHistory