import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Route } from 'react-router-dom';
const App = () => {
	const [data, setData] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    axios({
      method: "post",
      url: "/",
      data: {
        id: uId,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  console.log(data);

};

export default App;
