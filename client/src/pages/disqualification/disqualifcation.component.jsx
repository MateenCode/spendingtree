import React, { useState, useEffect } from "react";

import {
  SpendingTree,
  DisqualifcationContainer,
  Header
} from "./disqualifcation.styles";

const useFetch = url => {
  const [value, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      const value = data.message;
      setData(value);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { value, loading };
};

export default () => {
  const { value, loading } = useFetch("http://localhost:5000/error");

  return (
    <DisqualifcationContainer>
      <SpendingTree />
      {loading ? <div>...loading</div> : <Header>{value}</Header>}
    </DisqualifcationContainer>
  );
};
