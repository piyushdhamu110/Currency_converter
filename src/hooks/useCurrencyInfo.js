import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) // converts the response(object) into json format
      .then((res) => setData(res[currency])) //set currency information from response to state using setdata
      .catch((error) => {
        console.error("Error fetching currency info:", error);
        setData({});
      });
    // console.log(data);
  }, [currency]);
  // console.log(data);
  return data;
}

export default useCurrencyInfo;
