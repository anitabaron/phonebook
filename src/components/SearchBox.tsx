import { useDispatch, useSelector } from "react-redux";
import { setNameFilter, setNumberFilter } from "../redux/filters/filtersSlice";
import { useId } from "react";
import { selectFilter } from "../redux/filters/selectors";
import React from "react";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const searchFieldId = useId();
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameFilter(event.target.value.toLowerCase()));
    console.log("filter: ", event.target.value);
  };
  return (
    <>
      <h2>Search:</h2>
      <div className="search-bar">
        <label htmlFor={searchFieldId}></label>
        <label></label>
        Find contacts by name
        <input
          type="text"
          onChange={handleFilterChange}
          value={filter}
          id={searchFieldId}
        />
      </div>
    </>
  );
};

export default SearchBox;
