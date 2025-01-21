import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filters/filtersSlice";
import { useId } from "react";
import { selectFilter } from "../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const searchFieldId = useId();
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()));
    console.log("filter: ", e.target.value);
  };
  return (
    <>
      <h2>Search:</h2>
      <div className={styles.form}>
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
