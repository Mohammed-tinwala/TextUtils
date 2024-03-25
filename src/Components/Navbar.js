import React from 'react';       // rfc snippet used here.
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function Navbar(props) {    // Here i created a props which works as a varible.

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/home">Home</Link> */}
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link active" to="/about">{props.about}</Link> */}
                                <a className="nav-link active" href="#">{props.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">{props.Contact}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                        <div className={`form-check form-switch mx-2 text-${props.mode === 'light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                        </div>
                </div>
            </nav>
        </>
    )
}

// Here i created a prototype object
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
    contact: PropTypes.string
};


// // Here i created a prototype object
// Navbar.defualtProps = {
//     title: 'Set title here',
//     about: "About text here",
//     contact: "Conatact section here"
// };
