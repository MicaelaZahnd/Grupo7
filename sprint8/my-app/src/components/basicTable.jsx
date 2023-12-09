import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, description, movements) {
    return { date, description, movements };
}

const rows = [
    createData("2023-08-28", "Compra online", "-$50.00"),
    createData("2023-08-22", "Devolución de compra", "$30.00"),
    createData("2023-08-18", "Retio de cajero", "-$200.00"),
    createData("2023-08-15", "Pago de factura", "-$75.00"),
    createData("2023-08-10", "Transferencia recibida", "$500.00"),
    createData("2023-08-05", "Depósito", "$150.00"),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                className="tab-movimientos"
                cellSpacing="1"
                style={{ borderCollapse: "collapse" }}
                width="100%"
                id="transactionTable">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: 900, color: "#000000",backgroundColor: "#C2B2B4" }} align="center">Fecha de realización</TableCell>
                        <TableCell style={{ fontWeight: 900, color: "#000000",backgroundColor: "#C2B2B4" }} align="center">Descripción</TableCell>
                        <TableCell style={{ fontWeight: 900, color: "#000000",backgroundColor: "#C2B2B4" }} align="center">Movimiento</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="center">
                                {row.date}
                            </TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="center">{row.movements}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}