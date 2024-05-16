import React from "react";
import Breadcumbs from "../../components/ipo-details/breadcrums/Breadcum";
import CompanyDetailsHeader from "../../components/ipo-details/header/CompanyDetailsHeader";
import "./ipoDetailsPage.css";

const IpoDetailsPage = () => {
  return (
    <>
      <Breadcumbs />
      <main className="mainWrapper">
        <CompanyDetailsHeader />
      </main>
    </>
  );
};

export default IpoDetailsPage;
