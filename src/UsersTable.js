import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}>
                                <TableCell component='th' scope="row">{row.id}</TableCell>
                                <TableCell component='th' scope="row">{row.name}</TableCell>
                                <TableCell>
                                    <button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => {}}
                                    >
                                        Update
                                    </button>
                                    <button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => {}}
                                    >
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}>
                                <TableCell component='th' scope="row">No Data</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
    
}

export default UsersTable;