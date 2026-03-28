import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Cart from '../screens/Cart';
import modal from '../Model';
import { useCart } from './ContextReducer';




export default function Navbar(props) {
    const [cartView, setCartview] = useState(false);
    const navigate = useNavigate();
     let data = useCart();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-Cursive " to="/">
                        <a href='#' className='navlogo'>

                        </a>GOFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item ">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>

                            </li>
                             <li className="nav-item ">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">About Us</Link>
                                
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item ">
                                    <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Order</Link>
                                </li>
                                : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex' >
                                <Link className="nav-link btn bg-white text-success mx-1" to="/Login">Login</Link>
                                <Link className="nav-link btn bg-white text-success mx-1" to="/createuser"  >Sign Up</Link>
                            </div>
                            : <div>

                                <div className='btn bg-white text-success mx-1' onClick={() => { setCartview(true) }}>
                                    My Cart {" "}
                                    <Badge pill bg='danger'> {data.length} </Badge>
                                </div>
                                <Modal show={cartView} onHide={() => setCartview(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>My Cart</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Cart />
                                    </Modal.Body>
                                </Modal>
                                <div className='btn bg-white text-danger mx-1' onClick={handleLogout} > Log Out</div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}