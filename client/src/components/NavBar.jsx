import { AppBar,Toolbar, styled} from "@mui/material";
import { NavLink } from "react-router-dom";
import React from 'react';

const Header =styled(AppBar)`
    background: #111111
`;

const Tabs = styled(NavLink)`
    font-size:15px;
    margin:10px;
    color: inherit; 
    text-decoration:none;
`

const NavBar=() =>{
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to='/'><p>Code for Interview</p></Tabs>
                <Tabs to='/all'><p>All User</p></Tabs>
                <Tabs to='/add'><p>Add User</p></Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;