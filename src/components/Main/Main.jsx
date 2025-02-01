import { Card, CardHeader, CardContent, Box, Typography, Grid, Divider } from "@mui/material";
import Form from "./Form/Form";
import List from "./List/List";
import { useContext } from "react";
import Add_on from "../add_on/Add_on";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ExpenseTrackerContext } from "../../context/context";
import "./style.css";

export default function Main() {
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card sx={{ padding: '20px', margin: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardHeader align="center" title="Budget Buddy" subheader="Your Path to Financial Clarity" sx={{ padding: '10px 0 0 0' }} />
            <CardContent>
                <Typography align="center" variant="h5" mb="10px">
                    Total Balance ₹{balance} {balance !== 0 ? balance > 0 ? <ArrowUpwardIcon color="primary" fontSize="large" /> : <ArrowDownwardIcon color="error" fontSize="large" /> : <></>}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" mb="20px">
                    <Add_on />
                </Box>
                <Divider className="divider" />
                <Form />
            </CardContent>
            <CardContent className="cartContent">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}