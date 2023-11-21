import logo from '../Images/tinyTales.svg'
import React from 'react'

function NavBar() {
  return (
    <div className="navbar d-flex justify-content-between text-white px-4 py-3" 
    style={{ backgroundColor: "#000" }} >
      <div className=" d-flex align-items-center">
        <img className="mr-2" src={logo} alt="logo"  />
        <span className=" border-left border-warning ml-2 px-2 font-weight-bold" style={{fontFamily: "sans-serif"}}>
          S T O R I E S
        </span> </div>
      <button className="btn font-weight-bold px-4 py-2 btn-warning"> Courses </button>
    </div>
  );
}
export default NavBar;