const helperFunctions = {
  addCommas: function (num) {
    const number = Number(num);
    return number.toLocaleString();
  },
  formatDate: function (inputDate) {
    const [day, month, year] = inputDate.split("/");

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = monthNames[parseInt(month, 10) - 1];

    const formattedDate = `${day} ${monthName} ${year}`;

    return formattedDate;
  },
  addSom: function (number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder10 = number % 10;
    const remainder100 = number % 100;

    let suffix;
    if (remainder10 === 1 && remainder100 !== 11) {
      suffix = suffixes[1];
    } else if (remainder10 === 2 && remainder100 !== 12) {
      suffix = suffixes[2];
    } else if (remainder10 === 3 && remainder100 !== 13) {
      suffix = suffixes[3];
    } else {
      suffix = suffixes[0];
    }

    const numberWithSuffix = number + suffix;
    return numberWithSuffix;
  },
  formatInput: function (str, type) {
    switch (type) {
      case "table":
        return str.split(" ").reduce((acc, curr, index) => {
          if (index === 0) {
            return (acc += this.addSom(curr));
          } else if (index === 1) {
            return (acc += " " + curr);
          } else if (index === 2) {
            return (acc += " " + curr);
          }
        }, "");
      case "ipoDetails":
        return str.split(" ").reduce((acc, curr, index) => {
          if (index === 0) {
            return (acc += curr);
          } else if (index === 1) {
            return (acc += " " + curr);
          } else if (index === 2) {
            return (acc += " " + curr.slice(-2));
          }
        }, "");
    }
  },
};

export default helperFunctions;
