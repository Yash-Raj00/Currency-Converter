import React, { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_QSmZUabcghVK5ljz0H2SgD4ow13yeiCemTmKOfIW&base_currency=${currency}`).then((response) => response.json()).then((res) => setData(res["data"]));
    }, [currency]);
    
    // console.log(data);
    return data;
}

export default useCurrencyInfo;
