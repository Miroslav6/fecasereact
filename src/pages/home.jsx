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

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await api.get('/users');
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
    if (e) {
      $(`#row-${row.id}`).addClass('selected-row');
    }
    else {
      $(`#row-${row.id}`).removeClass('selected-row');
    }
  };
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          {!loading && (

            <TableContainer component={Paper} className='mb-5'>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {tableHeading.map((item) => (
                      <TableCell key={item}>{item}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      id={`row-${row.id}`}
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="td" scope="row">
                        <input
                          id={`custom-checkbox-${data.id}`}
                          type="checkbox"
                          onChange={(e) => handleCheckboxChange(e.target.checked, row)}
                        />
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.username}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.address.city}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          )}
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <a href='https://picsum.photos/' target='blank' className='primary-btn'>View Photos</a>
        </div>
      </div>
    </div>
  );
};


export default Home;