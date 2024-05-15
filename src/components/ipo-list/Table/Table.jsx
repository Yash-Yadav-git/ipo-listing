import React from "react";
import Image from "../../../images/oyo-rooms-seeklogo.svg";
import "./table.css";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const columns = [
    "Company/Issue Date",
    "Issue Size",
    "Price Range",
    "Min Invest/Qty",
  ];
  const navigate = useNavigate();

  const companiesData = [
    {
      company: "Go Air",
      companySubName: "Private Limited",
      issueDate: "4th - 7th Oct 2022",
      issueSize: "3600 Crores",
      priceRange: "50-60",
      minInvestment: "50000",
      qty: "100 Shares/5Lots",
      minimumQuantity: "150 Shares",
      listedOn: "15 Dec 22",
      listedPrice: "150",
      listingGains: "10",
      listingPercentage: "10.0%",
    },
    {
      company: "Bajaj Energy",
      companySubName: "Private Limited",
      issueDate: "4th - 7th Oct 2022",
      issueSize: "3600 Crores",
      priceRange: "50-60",
      minInvestment: "50000",
      qty: "100 Shares/5Lots",
      minimumQuantity: "150 Shares",
      listedOn: "15 Dec 22",
      listedPrice: "150",
      listingGains: "10",
      listingPercentage: "10.0%",
    },
    {
      company: "OYO",
      companySubName: "Private Limited",
      issueDate: null,
      issueSize: "3600 Crores",
      minimumQuantity: "150 Shares",
      priceRange: "50-60",
      minInvestment: "50000",
      qty: "100 Shares/5Lots",
      listedOn: "15 Dec 22",
      listedPrice: "150",
      listingGains: "10",
      listingPercentage: "10.0%",
    },
  ];
  const handleRowClick = (companyDetails) => {
    navigate(`details`, {
      state: {
        companyDetails: companyDetails,
      },
    });
  };

  const renderRows = () => {
    return (
      <>
        {companiesData.map((item, index) => {
          return (
            <tr key={index} onClick={() => handleRowClick(item)}>
              <td>
                <div className="dataDateWrapper">
                  <div className="dataImageRow">
                    <img src={Image} width="30px" height="30px" />
                    <div className="dataDateRow">
                      <span className="dataHeading">{item.company}</span>
                      <span className="dataSubHeading">
                        {item.issueDate ?? "To be announced"}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="dataHeading">{item.issueSize}</span>
              </td>
              <td>
                <span className="dataHeading">{item.priceRange}</span>
              </td>
              <td>
                <div className="dataQtyWrapper">
                  <span className="dataHeading">{item.minInvestment}</span>
                  <span className="dataSubHeading">{item.qty}</span>
                </div>
              </td>
            </tr>
          );
        })}
      </>
    );
  };
  return (
    <div className="tableWrapper">
      <table>
        <thead className="tableHeader">
          {columns.map((data) => (
            <th>{data}</th>
          ))}
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
