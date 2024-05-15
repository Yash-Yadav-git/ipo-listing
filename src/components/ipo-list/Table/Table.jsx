import React from "react";
import Image from "../../../images/oyo-rooms-seeklogo.svg";
import "./table.css";

const Table = () => {
  const columns = [
    "Company/Issue Date",
    "Issue Size",
    "Price Range",
    "Min Invest/Qty",
  ];

  const companiesData = [
    {
      company: "Go Air",
      issueDate: "4th - 7th Oct 2022",
      issueSize: "3600 Crores",
      priceRange: "50-60",
      minInvestment: "50000",
      qty: "100 Shares/5Lots",
    },
    {
      company: "Bajaj Energy",
      issueDate: "4th - 7th Oct 2022",
      issueSize: "3600 Crores",
      priceRange: "50-60",
      minInvestment: "50000",
      qty: "100 Shares/5Lots",
    },
    {
      company: "OYO",
      issueDate: null,
      issueSize: "3600 Crores",
      priceRange: "50-60",
      minInvestment: "50000",
      qty: "100 Shares/5Lots",
    },
  ];

  const renderRows = () => {
    return (
      <>
        {companiesData.map((item) => {
          return (
            <tr>
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
