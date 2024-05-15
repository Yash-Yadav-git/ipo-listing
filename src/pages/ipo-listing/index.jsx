import React from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../../images/oyo-rooms-seeklogo.svg";
import Table from "../../components/ipo-list/Table/Table";

const ListingPage = () => {
  const router = useParams();
  console.log("params are", router);

  return (
    <div>
      <Link to={"details"} state={{ previous: "/" }}></Link>
      <Table />
    </div>
  );
};

export default ListingPage;
