import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite } from '../actions';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import api from '../api/posts'
// import { useTable } from 'react-table'

const Albums = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await api.get('/users');
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className='container mt-5'>
      

    </div>
  )
}

export default Albums;