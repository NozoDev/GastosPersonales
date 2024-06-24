import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="text-right">
      <Link to="/">Logout</Link>
    </div>
  );
};

export default Logout;
