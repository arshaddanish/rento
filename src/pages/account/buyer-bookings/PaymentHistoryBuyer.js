import React from 'react'
import './paymentHistoryBuyer.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, amount) {
  return { date, amount };
}

const rows = [
  createData('15/09/2022', 2000),
];

const PaymentHistoryBuyer = ({trigger, setTrigger}) => {
  return(trigger)? (
    <div className='buyer-payment-history-popup-main'>
      <div className="buyer-payment-history-popup">
      <div
          onClick={() => setTrigger(false)}
          className="edit-profile-popup-close-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="buyer-payment-historye-sub">
          {/* <div>Date</div><div>: 15/09/2022</div>
          <div>Amount</div><div>: Rs. 2000/-</div> */}
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        
      </div>
    </div>
  ):null
}

export default PaymentHistoryBuyer