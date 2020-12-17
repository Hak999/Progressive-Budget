import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    margin:"auto"
  },
});

 

 

export default function Online() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Balance</TableCell>
                <TableCell>$500</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Deposit</TableCell>
                <TableCell>${localStorage.getItem("deposites")}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Expenses</TableCell>
                <TableCell>${localStorage.getItem("expenses")}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan="2" align="right">Total Balance</TableCell>
                <TableCell>${Number(localStorage.getItem("deposites"))+Number(500)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan="2" align="right">Expenses</TableCell>
                <TableCell>${Number(localStorage.getItem("expenses"))}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan="2" align="right">Remaining</TableCell>
                <TableCell>${Number(localStorage.getItem("deposites"))+Number(500)-Number(localStorage.getItem("expenses"))}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
