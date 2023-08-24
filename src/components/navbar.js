// import React from "react";

// class Navbar extends React.Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Apna Cart
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;
import React from "react";

function Navbar() {
  return (
    <nav>
      <button>Home</button>
      <button>Products</button>
      <button>Contact</button>
    </nav>
  );
}

export default Navbar;
