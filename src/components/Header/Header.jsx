import React, { useContext, useRef } from "react";
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom"; 
import "../../styles/header.css";
import { useNavigate } from 'react-router-dom';
import { AiFillHdd } from "react-icons/ai";
import { IoIosColorFilter } from "react-icons/io";
import { MdBuild } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import { enc, SHA256 } from 'crypto-js';
import AuthUser from "../AuthUser";
import { UserContext } from "../Layout/Layout";

const expert=()=>{
}

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/parts",
    display: "Parts",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/cart",
    display: "Cart",
  },
  {
    path: "/expertSystem",
    display: "Help",
  },
];


const Header = () => {
const{http}= AuthUser();


  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  
  const isLoggedIn = Boolean(sessionStorage.getItem('token')) ;
  
  const user = useContext(UserContext)


  const isSeller = user?.utype === '2';


  const navigate = useNavigate();


  const logout =()=>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    http.post('/logout')
    navigate('/home');
    
  }

  return (
    <header className="header">
      <style>
      https
      </style>
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +963-930-8888-19
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                  {isLoggedIn && isSeller && user ===false ?  (
              // Render links for logged-in users
                  <DropdownButton  title={<IoIosColorFilter />} variant="dark">
                  <Dropdown.Item href="/userProfile" style={{color:'black'}} hover="profile"> <AiFillHdd /> 
                  Profile</Dropdown.Item>
                  <Dropdown.Item href="/Purchases" style={{color:'black'}} hover="Purchases"> <AiFillHdd /> 
                  Purchases</Dropdown.Item>
                  <Dropdown.Item href="/Cart" style={{color:'black'}} hover="profile"> <AiFillHdd /> 
                  Cart</Dropdown.Item>
                  <Dropdown.Item onClick={logout} style={{color:'black'}} hover="signout"><GoSignOut/> 
                  Sign out </Dropdown.Item>
                </DropdownButton>
              ) :isLoggedIn && isSeller===true && user ? (
                <DropdownButton  title={<IoIosColorFilter />} variant="dark">
                <Dropdown.Item href="/userProfile" style={{color:'black'}} hover="profile"> <AiFillHdd /> 
                Profile</Dropdown.Item>
                <Dropdown.Item href="/Purchases" style={{color:'black'}} hover="Purchases"> <AiFillHdd /> 
                Purchases</Dropdown.Item>
                <Dropdown.Item href="/Cart" style={{color:'black'}} hover="profile"> <AiFillHdd /> 
                Cart</Dropdown.Item>
    
                <Dropdown.Item href="/SellerParts" style={{color:'black'}} hover="SellerParts"> <AiFillHdd /> 
                My Parts</Dropdown.Item>
                <Dropdown.Item href="/SellerDeletedParts" style={{color:'black'}} hover="SellerParts"> <AiFillHdd /> 
                Deleted Parts</Dropdown.Item>
              
                <Dropdown.Item href="/SalesForSeller" style={{color:'black'}} hover="SalesForSeller"> <AiFillHdd /> 
                Sales For Seller</Dropdown.Item>
             
                <Dropdown.Item href="/propose" style={{color:'black'}} hover="ProposeCategory"> <AiFillHdd /> 
                Propose</Dropdown.Item>
                {/* <Dropdown.Item href="/ProposeCarModel" style={{color:'black'}} hover="ProposeCarModel"> <AiFillHdd /> 
                Propose Car Model</Dropdown.Item>
                <Dropdown.Item href="/ProposeCarType" style={{color:'black'}} hover="ProposeCarType"> <AiFillHdd /> 
                Propose Car Type</Dropdown.Item> */}
                <Dropdown.Item onClick={logout} style={{color:'black'}} hover="signout"><GoSignOut/> 
                   Sign out </Dropdown.Item>
                </DropdownButton>
   

              ) : (
                <>
                <Link to="/login" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>
                <Link to="/register" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link>
              </>
               )}

          </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Auto Parts <br /> Shop
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Syria</h4>
                  <h6>Damascus, Syria</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Saterday to Friday</h4>
                  <h6>24/7</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar" style={{padding:20}} >
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
