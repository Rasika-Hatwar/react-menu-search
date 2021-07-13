import { useState, useEffect } from "react";
import MenuCard from "../MenuCard/MenuCard";
import "./Home.scss";

const API_BASE_URL =
  "https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef";

export default function Home() {
  const [menuData, setMenuData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}`)
      .then((response) => response.json())
      .then((menuData) => {
        setMenuData(menuData);
        setFilterData(menuData);
        console.log("In first use effect");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  useEffect(() => {
    const currentResult = menuData.filter(({ name }) => {
      return name.toLowerCase().match(searchText.toLowerCase());
    });
    setFilterData(currentResult);
  }, [menuData, searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div class="mainContainer">
      <div class="header">
        <input
          type="text"
          value={searchText}
          placeholder="Search for dishes"
          onChange={handleChange}
        />
      </div>
      <MenuCard cardData={filterData} />
    </div>
  );
}
