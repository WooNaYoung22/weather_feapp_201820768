import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CityList = (props) => {
  console.log(props);
  const { cities, match } = props;
  const { url } = match;

  //추가
  const uniqueCities = cities.filter(
    (item, index) => cities.indexOf(item) === index
  );

  console.log(url);
  return (
    <ul>
      {uniqueCities.map((item) => {
        console.log(item); //이거원래 주석
        return (
          //li가 List 형태
          <li key={item}>
            <Link to={`${url}/${item}`}>{item}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(CityList);
