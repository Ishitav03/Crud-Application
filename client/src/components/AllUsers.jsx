import React from 'react';

import { useEffect, useState } from 'react';
import { Table,TableHead, TableRow,TableCell, TableBody, styled,Button } from '@mui/material';


import {Link} from 'react-router-dom';
import { getUsers, deleteUser } from '../service/api.js';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const Thead = styled(TableRow)`
    background:#000000;
    &> th{
        color:#fff; 
        font-size:15px;  
    }
`

const AllUsers=() => {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers=async() => {
        let response= await getUsers();
        setUsers(response.data);
    }

    const deleteUserdetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                { users.map(user =>(
                    <TableRow key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit </Button> 
                            <Button color="secondary" variant="contained" onClick={()=> deleteUserdetails(user._id)}>Delete</Button>
                        </TableCell>                        
                    </TableRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}
export default AllUsers;