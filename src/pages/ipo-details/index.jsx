import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const IpoDetailsPage = () => {
  const router = useLocation();
  console.log("params are", router);
  return (
    <div>
      <span>
        <Link to={"/"}>
          <h6>Home</h6>
        </Link>
        <span> /</span>
        <Link to={"/details"}>
          <h6>Market Watch</h6>
        </Link>
      </span>
      <h1>Hello from details page</h1>
    </div>
  );
};

export default IpoDetailsPage;
