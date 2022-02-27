// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from '../api/posts'
import $ from "jquery";

const TableComponent = (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await api.get('/users');
                const newData = response.map(obj=> ({ ...obj, isChecked: 'false' }))
                console.log(newData);
                setData(response);

            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        
        fetchData();


    }, []);

    const tableHeading = ['', 'ID', 'Name', 'Username', 'Email', 'City'];
    const handleCheckboxChange = (e, row) => {
       setIsChecked(e);
        if(e){
            $(`#row-${row.id}`).addClass('selected-row');
        }
        else {
            $(`#row-${row.id}`).removeClass('selected-row');
        }
        
    };
    return (
        <div className='container mt-5'>
            {!loading && (

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {tableHeading.map((item) => (
                                    <TableCell key={item}>{item}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow
                                    id={`row-${row.id}`}
                                    // className={isChecked ? 'best' : ''}
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="td" scope="row">
                                        <input
                                            id={`custom-checkbox-${data.id}`}
                                            type="checkbox"
                                            // checked={isChecked}
                                            onChange={(e) => handleCheckboxChange(e.target.checked, row)}
                                            // onChange={handleCheckboxChange}
                                            // checked={isChecked}
                                            
                                        />
                                    </TableCell>
                                    <TableCell component="td" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.username}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.address.city}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            )
            }
        </div>
    );
};
export default TableComponent;

