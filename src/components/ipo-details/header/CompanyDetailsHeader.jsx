import React, { useLayoutEffect, useState } from "react";
import { PiLessThan } from "react-icons/pi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import "./company-header.css";
import Image from "../../../images/oyo-rooms-seeklogo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Stepper from "../stepper/Stepper";
import globalData from "../../../constants/index";
import helperFunctions from "../../../utility";

const CompanDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { IPO_STEPS, IPO_STEPS_Mobile, companiesData } = globalData;
  const companyDetails = state?.companyDetails ?? companiesData[0];
  const [isMobile, setIsMobile] = useState();
  const dimesnions = {
    width: (() => window.innerWidth)(),
  };

  useLayoutEffect(() => {
    console.log("Layout Effect ran");
    if (window.innerWidth < 780) {
      setIsMobile(true);
    }
  }, [dimesnions.width]);

  function renderIssueDate(date, isIssueDate) {
    const startDate = helperFunctions.formatInput(
      helperFunctions.formatDate(date),
      "ipoDetails"
    );
    let endDate = helperFunctions.formatInput(
      helperFunctions.formatDate(date),
      "ipoDetails"
    );
    return isIssueDate ? `${startDate.slice(0, 6)} - ${endDate}` : `${endDate}`;
  }

  const values = [
    { heading: "Issue size", value: companyDetails?.issueSize },
    { heading: "Price range", value: companyDetails?.priceRange },
    {
      heading: "Minumum amount",
      value: helperFunctions.addCommas(companyDetails?.minInvestment),
    },
    { heading: "Lot size", value: companyDetails?.qty },
    {
      heading: "Issued dates",
      value: renderIssueDate(companyDetails?.issueDate, true),
    },
    { heading: "Listed On", value: renderIssueDate(companyDetails?.listedOn) },
    { heading: "Listed Price", value: companyDetails?.listedPrice },
    {
      heading: "Listing Gains",
      value: `${companyDetails?.minInvestment}(${companyDetails?.listingPercentage})`,
    },
  ];

  const mobileValues = [
    { heading: "Issue size", value: companyDetails?.issueSize },
    { heading: "Price range", value: companyDetails?.priceRange },
    { heading: "Min. amount", value: companyDetails?.minInvestment },
    { heading: "Min. Quantity", value: companyDetails?.minimumQuantity },
    { heading: "Issued dates", value: companyDetails?.issueDate },
  ];

  const renderCompanyDetails = () => {
    const operationalArray = isMobile ? mobileValues : values;
    const hasRupees = [
      "Issue size",
      "Price range",
      "Min. amount",
      "Listed Price",
      "Listing Gains",
      "Minumum amount",
    ];
    return (
      <div
        className={`${isMobile ? "mobileSectionWrapper" : "sectionWrapper"}`}
      >
        {operationalArray.map((item) => (
          <div className="detailsWrapper">
            <span className="companySubDetailsHeading">{item.heading}</span>
            {hasRupees.includes(item.heading) ? (
              <span className="companyDetailsHeading">
                &#x20B9;{item.value}
              </span>
            ) : (
              <span className="companyDetailsHeading">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="detailsMainWrapper">
      <div className="headerWrapper">
        {isMobile ? (
          <div className="companyDetailsWrapper">
            <img src={Image} width="50px" height="50px" />
            <div>
              <span>{companyDetails?.company}</span> <br />
              <span>{companyDetails?.companySubName}</span>
            </div>
          </div>
        ) : (
          <>
            <div className="headLeftWrapper">
              <div className="backIconWrapper">
                <PiLessThan onClick={() => navigate("/")} />
              </div>
              <div className="companyDetailsWrapper">
                <img src={Image} width="50px" height="50px" />
                <div>
                  <span>{companyDetails?.company}</span> <br />
                  <span>{companyDetails?.companySubName}</span>
                </div>
              </div>
            </div>
            <div className="headRightWrapper">
              <HiOutlineDocumentDownload size={"50px"} className="dataImage" />
              <div className="detailsCtaWrapper">
                <button>
                  <label>Apply now</label>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="ipoDetailsWrapper">
        <span>IPO Details</span>
        {renderCompanyDetails()}
      </div>

      {/* Multi Stepper */}
      <div className="ipoDetailsWrapper">
        <span>IPO timeline</span>
        <Stepper
          stepsConfig={isMobile ? IPO_STEPS_Mobile : IPO_STEPS}
          isMobile={isMobile}
        />
      </div>

      {/* About Section */}
      <div className={`${isMobile ? "mbAbout" : "ipoDetailsWrapper"}`}>
        {!isMobile ? (
          <span>About</span>
        ) : (
          <span className="aboutHeading">{`${companyDetails?.company} ${companyDetails?.companySubName}`}</span>
        )}
        <p className="aboutDetails">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem placeat fugiat quod laborum, dolorum minus, tempore
          aperiam deleniti reprehenderit hic consequatur? Debitis molestias
          nostrum itaque, alias aliquid officiis hic quam?
        </p>
      </div>
    </div>
  );
};

export default CompanDetails;
