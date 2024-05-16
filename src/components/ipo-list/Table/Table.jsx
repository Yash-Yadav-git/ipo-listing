import React from "react";
import Image from "../../../images/oyo-rooms-seeklogo.svg";
import "./table.css";
import { useNavigate } from "react-router-dom";
import globalData from "../../../constants/index";
import helper from "../../../utility/index";

const Table = () => {
  const { columns, companiesData } = globalData;
  const navigate = useNavigate();
  const handleRowClick = (companyDetails) => {
    navigate(`details`, {
      state: {
        companyDetails: companyDetails,
      },
    });
  };

  function renderIssueDate(company) {
    const startDate = helper.formatInput(
      helper.formatDate(company.issueStartDate),
      "table"
    );
    let endDate = helper.formatInput(
      helper.formatDate(company.issueEndDate),
      "table"
    );
    return `${startDate.split(" ")[0]} - ${endDate}`;
  }

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
                        {renderIssueDate(item) ?? "To be announced"}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="dataHeading">
                  {" "}
                  &#x20B9;{item.issueSize.toLocaleString("en-IN")}
                </span>
              </td>
              <td>
                <span className="dataHeading"> &#x20B9;{item.priceRange}</span>
              </td>
              <td>
                <div className="dataQtyWrapper">
                  <span className="dataHeading">
                    {" "}
                    &#x20B9;{helper.addCommas(item.minInvestment)}
                  </span>
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
