import { useState } from "react";
import produce from "../produce";
import ListItem from "./ListItem";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function FilteredList() {
  const [filterItem, setFilterItem] = useState("");
  const [filterType, setFilterType] = useState("All");

  function onSearch(event) {
    const filterText = event.target.value;
    console.log(filterText);

    setFilterItem(filterText);
  }

  function filterList() {
    return produce.filter((produce) => {
      if (filterType === "All") {
        return produce.name.toLowerCase().includes(filterItem.toLowerCase());
      } else if (filterType === "Fruit") {
        return (
          produce.name.toLowerCase().includes(filterItem.toLowerCase()) &&
          produce.type === "Fruit"
        );
      } else if (filterType === "Vegetable") {
        return (
          produce.name.toLowerCase().includes(filterItem.toLowerCase()) &&
          produce.type === "Vegetable"
        );
      }
    });
  }

  function createList() {
    const filteredList = filterList();
    return filteredList.map((produce) => (
      <ListItem key={produce.id} name={produce.name} />
    ));
  }

  function onType(event) {
    const filterText = event.target.text;
    setFilterType(filterText);
  }

  return (
    <div>
      <h1>Produce Search</h1>
      <div className="filter">
        <input type="text" placeholder="Search" onChange={onSearch} />
        <DropdownButton id="dropdown" title="Type">
          <Dropdown.Item onClick={onType} >All</Dropdown.Item>
          <Dropdown.Item onClick={onType} >Fruit</Dropdown.Item>
          <Dropdown.Item onClick={onType} >Vegetable</Dropdown.Item>
        </DropdownButton>
      </div>
      <ul>{createList()}</ul>
    </div>
  );
}

export default FilteredList;
