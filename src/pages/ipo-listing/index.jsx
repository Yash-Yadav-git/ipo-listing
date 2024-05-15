import React from "react";
import { Link, useParams } from "react-router-dom";
import Table from "../../components/ipo-list/Table/Table";

const ListingPage = () => {
  const router = useParams();
  console.log("params are", router);

  return (
    <div>
      <Table />
    </div>
  );
};

export default ListingPage;
