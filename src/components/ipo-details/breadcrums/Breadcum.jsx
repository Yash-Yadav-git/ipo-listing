import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./breadcum.css";
import { PiGreaterThan } from "react-icons/pi";

const Breadcumbs = () => {
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <div className="dbWrappper">
      <span onClick={() => navigate("/")} className="bdLinks">
        Home
      </span>
      <PiGreaterThan />
      <span
        onClick={() =>
          navigate(`/details`, {
            state: {
              companyDetails: router?.state?.companyDetails,
            },
          })
        }
        className="bdLinks"
      >
        Market Watch
      </span>
      <PiGreaterThan />
      <span className="bdLinks">{router?.state?.companyDetails?.company}</span>
    </div>
  );
};

export default Breadcumbs;
