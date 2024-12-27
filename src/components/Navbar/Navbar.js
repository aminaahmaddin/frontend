// import React from 'react';
// import './Navbar.css'; // Assuming you are going to add some CSS styles in a separate file.

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       {/* Logo on the left */}
//       <div className="navbar-logo">
//         <h1>Logo</h1>
//       </div>

//       {/* Buttons on the right */}
//       <div className="navbar-buttons">
//         <button className="signin-btn">Sign In</button>
//         <button className="signup-btn">Sign Up</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Navbar
