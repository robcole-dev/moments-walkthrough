import { Navbar, Container, Nav } from "react-bootstrap";
import React, { useContext } from "react";
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import {NavLink} from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext)
    const LoggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = (
    <> 
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
            <i class="fas fa-sign-in-alt"></i>Sign In
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
            <i class="fas fa-user-plus"></i>Sign Up
        </NavLink>
    </>)

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45" />
                </Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                            <i class="fas fa-home"></i>Home
                        </NavLink>
                        {currentUser ? LoggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
