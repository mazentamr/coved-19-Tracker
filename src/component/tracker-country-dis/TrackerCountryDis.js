import { useTrackerCountryDisStyle } from "./TrackerCountryDisStyle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TrackerCountryDis({ countrys }) {
    const classes = useTrackerCountryDisStyle();
    return (
        <div className={classes.root}>
            <TableContainer component={Paper} className={classes.table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="right">Total Cases</TableCell>
                            <TableCell align="right">New Cases</TableCell>
                            <TableCell align="right">Total Deaths</TableCell>
                            <TableCell align="right">New Deaths</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countrys.map((item, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    <div className={classes.country}>
                                        <img src={item.countryInfo.flag} alt="" className={classes.flag} />
                                        <div> {item.country}</div>
                                    </div>
                                </TableCell>
                                <TableCell align="right">{item.cases}</TableCell>
                                <TableCell align="right">{item.todayCases}</TableCell>
                                <TableCell align="right">{item.deaths}</TableCell>
                                <TableCell align="right">{item.todayDeaths}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}