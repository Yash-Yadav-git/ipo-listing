import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Breadcumbs from "../../components/ipo-details/breadcrums/Breadcum";

const IpoDetailsPage = () => {
  return (
    <div>
      <Breadcumbs />
      <h1>Hello from details page</h1>
    </div>
  );
};

export default IpoDetailsPage;
