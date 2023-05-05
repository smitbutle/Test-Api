import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const url = 'http://localhost:4000/show';

let rows= []
function FetchD(){
    const [results, setResults] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url);
            const dataUser = Object.values(response.data);
            console.log(dataUser)
            setResults(dataUser);
        }
        rows = results;
        fetchData();
        
    },[results]);
}
export default function CustomizedTables() {
    FetchD();
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>  
                        <TableRow>
                            <StyledTableCell align="right">First Name</StyledTableCell>
                            <StyledTableCell align="right">Last Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Password</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {   
                            rows.map((row) => (
                                <StyledTableRow key={row.EMAILID}>
                                {/* <StyledTableCell component="th" scope="row">
                                {row.name} 
                            </StyledTableCell> */}
                                <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                                <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                                <StyledTableCell align="right">{row._id}</StyledTableCell>
                                <StyledTableCell align="right">{row.password}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody> 
                </Table> 
            </TableContainer>
            <Button
                type="link"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                href="/"
            >
                Return
            </Button>
        </>
    );
}