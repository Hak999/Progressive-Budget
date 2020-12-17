import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
 
const OfflineData = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [expense, setExpense] = React.useState(0);

    const handleExpense = (e) => {
        setExpense(e.target.value);
    }
    const handleDeposit = (e) => {
        setDeposit(e.target.value)
    }
    const submitExpense = () => {
        let value = localStorage.getItem("expenses");
        if (value === null) value = 0;
        value = Number(value) + Number(expense);
        localStorage.setItem("expenses", value);
    }
    const submitDeposit = () => {
        let value = localStorage.getItem("deposites");
        if (value === null) value = 0;
        value = Number(value) + Number(deposit);
        localStorage.setItem("deposites", value);
    }
    return (
        <>
            <Grid container style={{ marginTop: "2rem" }}>
                <Grid item xs={4} sm={4} md={4} />
                <Grid item xs={4} sm={4} md={4}>
                    <TextField id="standard-basic" label="Amount" onChange={handleDeposit} />
                    <Button variant="contained" color="primary" onClick={submitDeposit}>
                        Deposit
                </Button>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: "2rem" }}>
                <Grid item xs={4} sm={4} md={4} />
                <Grid item xs={4} sm={4} md={4}>
                    <TextField id="standard-basic" label="Amount" onChange={handleExpense} />
                    <Button variant="contained" color="secondary" onClick={submitExpense}>
                        Expenses
            </Button>
                </Grid>
            </Grid>
        </>

    );
}

export default OfflineData;